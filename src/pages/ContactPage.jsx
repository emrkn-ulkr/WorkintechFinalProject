import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "react-toastify";

export default function ContactPage() {
    function handleSubmit(e) {
        e.preventDefault();
        toast.success("Message sent!");
    }

    return (
        <div className="flex w-full flex-col gap-6">
            {/* Title */}
            <div className="flex w-full flex-col gap-1">
                <h1 className="text-xl font-bold md:text-3xl">Contact</h1>
                <p className="text-sm md:text-base">We&apos;d love to hear from you.</p>
            </div>

            {/* Mobile: column | Desktop: two columns */}
            <div className="flex w-full flex-col gap-6 md:flex-row">
                {/* Left: Info */}
                <div className="flex w-full flex-col gap-4 md:w-1/2">
                    <div className="flex w-full flex-col gap-3 rounded-lg border p-4">
                        <div className="flex items-center gap-3">
                            <MapPin className="h-5 w-5" />
                            <div className="flex flex-col">
                                <span className="text-sm font-medium">Address</span>
                                <span className="text-sm">Istanbul, TR</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <Phone className="h-5 w-5" />
                            <div className="flex flex-col">
                                <span className="text-sm font-medium">Phone</span>
                                <span className="text-sm">+90 000 000 00 00</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <Mail className="h-5 w-5" />
                            <div className="flex flex-col">
                                <span className="text-sm font-medium">Email</span>
                                <span className="text-sm">support@example.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Map placeholder */}
                    <div className="flex w-full items-center justify-center rounded-lg border p-4">
                        <div className="flex h-40 w-full items-center justify-center md:h-64">
                            <span className="text-sm font-medium">Map Placeholder</span>
                        </div>
                    </div>
                </div>

                {/* Right: Form */}
                <div className="flex w-full flex-col gap-4 md:w-1/2">
                    <form
                        className="flex w-full flex-col gap-4 rounded-lg border p-4"
                        onSubmit={handleSubmit}
                    >
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium">Name</label>
                            <input
                                className="w-full rounded-md border px-3 py-2 text-sm"
                                type="text"
                                name="name"
                                placeholder="Your name"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium">Email</label>
                            <input
                                className="w-full rounded-md border px-3 py-2 text-sm"
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium">Message</label>
                            <textarea
                                className="w-full rounded-md border px-3 py-2 text-sm"
                                name="message"
                                rows="5"
                                placeholder="Write your message..."
                                required
                            />
                        </div>

                        <button
                            className="flex w-full items-center justify-center rounded-md border px-4 py-3 text-sm font-medium"
                            type="submit"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
