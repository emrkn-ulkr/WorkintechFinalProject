import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import workintechApi from "../api/workintech";
import { Loader2 } from "lucide-react";

export default function SignUpPage() {
    const history = useHistory();
    const [roles, setRoles] = useState([]);
    const [rolesLoading, setRolesLoading] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        clearErrors,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            password2: "",
            role_id: "",
            store_name: "",
            store_phone: "",
            store_tax_no: "",
            store_bank_account: "",
        },
        mode: "onBlur",
    });

    const password = watch("password");
    const roleId = watch("role_id");

    const selectedRole = useMemo(() => {
        const idNum = Number(roleId);
        if (!idNum) return null;
        return roles.find((r) => Number(r.id) === idNum) || null;
    }, [roles, roleId]);

    const isStoreRole = useMemo(() => {
        const name = (selectedRole?.name || selectedRole?.role || selectedRole?.title || "")
            .toString()
            .toLowerCase();
        return name.includes("store");
    }, [selectedRole]);

    useEffect(() => {
        let alive = true;

        async function fetchRoles() {
            setRolesLoading(true);
            try {
                const res = await workintechApi.get("/roles");
                const data = Array.isArray(res.data) ? res.data : res.data?.data || [];
                if (!alive) return;

                setRoles(data);

                // Default: Customer seçili
                const customer =
                    data.find((r) =>
                        (r.name || r.role || r.title || "").toString().toLowerCase().includes("customer")
                    ) || data[0];

                if (customer?.id != null) {
                    setValue("role_id", String(customer.id), { shouldValidate: true });
                }
            } catch (err) {
                toast.error(
                    err?.response?.data?.message ||
                    err?.message ||
                    "Roller yüklenirken bir hata oluştu."
                );
            } finally {
                if (alive) setRolesLoading(false);
            }
        }

        fetchRoles();
        return () => {
            alive = false;
        };
    }, [setValue]);

    // Store rolünden çıkınca store alan hatalarını temizle (UX)
    useEffect(() => {
        if (!isStoreRole) {
            clearErrors([
                "store_name",
                "store_phone",
                "store_tax_no",
                "store_bank_account",
            ]);
        }
    }, [isStoreRole, clearErrors]);

    const validateEmail = (value) => {
        const v = String(value || "").trim();
        // Basit ve güvenilir email kontrolü
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(v) || "Geçerli bir e-posta girin.";
    };

    const validatePassword = (value) => {
        const v = String(value || "");
        // min 8, en az 1 küçük, 1 büyük, 1 sayı, 1 özel
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
        return (
            re.test(v) ||
            "Şifre en az 8 karakter; küçük harf, büyük harf, sayı ve özel karakter içermelidir."
        );
    };

    const normalizeDigits = (value) => String(value || "").replace(/\D/g, "");

    const validateTRPhone = (value) => {
        const digits = normalizeDigits(value);
        // Türkiye GSM için pratik doğrulama: 05XXXXXXXXX veya 5XXXXXXXXX veya 90 + 5XXXXXXXXX
        if (digits.length === 10 && digits.startsWith("5")) return true;
        if (digits.length === 11 && digits.startsWith("05")) return true;
        if (digits.length === 12 && digits.startsWith("905")) return true;
        return "Geçerli bir Türkiye telefon numarası girin.";
    };

    const validateTaxNo = (value) => {
        const v = String(value || "").trim().toUpperCase();
        const re = /^T\d{4}V\d{6}$/;
        return re.test(v) || 'Vergi No formatı "TXXXXVXXXXXX" olmalıdır.';
    };

    const validateIBAN = (value) => {
        const v = String(value || "").replace(/\s/g, "").toUpperCase();
        // TR IBAN: TR + 24 digit = 26 karakter
        const re = /^TR\d{24}$/;
        return re.test(v) || "Geçerli bir TR IBAN girin (ör: TR12 0000 ...).";
    };

    const onSubmit = async (form) => {
        try {
            const role_id_num = Number(form.role_id);

            if (!role_id_num) {
                toast.error("Lütfen bir rol seçin.");
                return;
            }

            let payload = {
                name: String(form.name || "").trim(),
                email: String(form.email || "").trim(),
                password: String(form.password || ""),
                role_id: role_id_num,
            };

            if (isStoreRole) {
                payload = {
                    ...payload,
                    store: {
                        name: String(form.store_name || "").trim(),
                        phone: String(form.store_phone || "").trim(),
                        tax_no: String(form.store_tax_no || "").trim().toUpperCase(),
                        bank_account: String(form.store_bank_account || "")
                            .replace(/\s/g, "")
                            .toUpperCase(),
                    },
                };
            }

            await workintechApi.post("/signup", payload);

            toast.warning("Hesabını etkinleştirmek için e-postadaki linke tıklamalısın!");
            history.goBack();
        } catch (err) {
            const msg =
                err?.response?.data?.message ||
                err?.response?.data?.error ||
                err?.message ||
                "Kayıt sırasında bir hata oluştu.";
            toast.error(msg);
        }
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
                <h1 className="text-base font-semibold">Üye Ol</h1>
                <p className="text-sm text-gray-600">
                    Yeni hesap oluşturmak için bilgilerini doldur.
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 rounded-xl border p-4">
                {/* Ad Soyad */}
                <div className="flex flex-col gap-1">
                    <label className="text-sm">Ad Soyad</label>
                    <input
                        className="flex rounded-lg border px-3 py-2 text-sm"
                        placeholder="Adınızı girin"
                        {...register("name", {
                            required: "Ad Soyad zorunludur.",
                            minLength: { value: 3, message: "En az 3 karakter olmalıdır." },
                        })}
                    />
                    {errors.name ? (
                        <p className="text-xs text-red-600">{errors.name.message}</p>
                    ) : null}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1">
                    <label className="text-sm">E-posta</label>
                    <input
                        className="flex rounded-lg border px-3 py-2 text-sm"
                        placeholder="eposta@ornek.com"
                        {...register("email", {
                            required: "E-posta zorunludur.",
                            validate: validateEmail,
                        })}
                    />
                    {errors.email ? (
                        <p className="text-xs text-red-600">{errors.email.message}</p>
                    ) : null}
                </div>

                {/* Password */}
                <div className="flex flex-col gap-1">
                    <label className="text-sm">Şifre</label>
                    <input
                        type="password"
                        className="flex rounded-lg border px-3 py-2 text-sm"
                        placeholder="••••••••"
                        {...register("password", {
                            required: "Şifre zorunludur.",
                            validate: validatePassword,
                        })}
                    />
                    {errors.password ? (
                        <p className="text-xs text-red-600">{errors.password.message}</p>
                    ) : null}
                </div>

                {/* Password2 */}
                <div className="flex flex-col gap-1">
                    <label className="text-sm">Şifre (Tekrar)</label>
                    <input
                        type="password"
                        className="flex rounded-lg border px-3 py-2 text-sm"
                        placeholder="••••••••"
                        {...register("password2", {
                            required: "Şifre tekrarı zorunludur.",
                            validate: (v) => v === password || "Şifreler eşleşmiyor.",
                        })}
                    />
                    {errors.password2 ? (
                        <p className="text-xs text-red-600">{errors.password2.message}</p>
                    ) : null}
                </div>

                {/* Role */}
                <div className="flex flex-col gap-1">
                    <label className="text-sm">Rol</label>

                    <select
                        className="flex rounded-lg border px-3 py-2 text-sm"
                        disabled={rolesLoading || !roles.length}
                        {...register("role_id", {
                            required: "Rol seçimi zorunludur.",
                            onChange: () => {
                                // role değişince store alanlarını kullanıcı isterse doldurur
                            },
                        })}
                    >
                        {rolesLoading ? (
                            <option value="">Roller yükleniyor...</option>
                        ) : roles.length ? (
                            roles.map((r) => (
                                <option key={r.id} value={String(r.id)}>
                                    {r.name || r.role || r.title || `Rol #${r.id}`}
                                </option>
                            ))
                        ) : (
                            <option value="">Rol bulunamadı</option>
                        )}
                    </select>

                    {errors.role_id ? (
                        <p className="text-xs text-red-600">{errors.role_id.message}</p>
                    ) : null}
                </div>

                {/* Store alanları */}
                {isStoreRole ? (
                    <div className="flex flex-col gap-4 rounded-xl border p-4">
                        <p className="text-sm font-semibold">Mağaza Bilgileri</p>

                        <div className="flex flex-col gap-1">
                            <label className="text-sm">Mağaza Adı</label>
                            <input
                                className="flex rounded-lg border px-3 py-2 text-sm"
                                placeholder="Mağaza adını girin"
                                {...register("store_name", {
                                    required: "Mağaza adı zorunludur.",
                                    minLength: { value: 3, message: "En az 3 karakter olmalıdır." },
                                })}
                            />
                            {errors.store_name ? (
                                <p className="text-xs text-red-600">{errors.store_name.message}</p>
                            ) : null}
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-sm">Mağaza Telefonu</label>
                            <input
                                className="flex rounded-lg border px-3 py-2 text-sm"
                                placeholder="05xx xxx xx xx"
                                {...register("store_phone", {
                                    required: "Telefon zorunludur.",
                                    validate: validateTRPhone,
                                })}
                            />
                            {errors.store_phone ? (
                                <p className="text-xs text-red-600">{errors.store_phone.message}</p>
                            ) : null}
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-sm">Vergi No</label>
                            <input
                                className="flex rounded-lg border px-3 py-2 text-sm"
                                placeholder="T1234V123456"
                                {...register("store_tax_no", {
                                    required: "Vergi No zorunludur.",
                                    validate: validateTaxNo,
                                })}
                            />
                            {errors.store_tax_no ? (
                                <p className="text-xs text-red-600">{errors.store_tax_no.message}</p>
                            ) : null}
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-sm">IBAN</label>
                            <input
                                className="flex rounded-lg border px-3 py-2 text-sm"
                                placeholder="TR12 0000 0000 0000 0000 0000 00"
                                {...register("store_bank_account", {
                                    required: "IBAN zorunludur.",
                                    validate: validateIBAN,
                                })}
                            />
                            {errors.store_bank_account ? (
                                <p className="text-xs text-red-600">{errors.store_bank_account.message}</p>
                            ) : null}
                        </div>
                    </div>
                ) : null}

                {/* Submit */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm font-medium disabled:opacity-60"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="animate-spin" size={16} />
                            Gönderiliyor...
                        </>
                    ) : (
                        "Kayıt Ol"
                    )}
                </button>

                <div className="flex flex-col gap-1">
                    <p className="text-xs text-gray-600">
                        Not: Aynı e-posta ile tekrar kayıt denersen hata alırsın.
                    </p>
                </div>
            </form>
        </div>
    );
}