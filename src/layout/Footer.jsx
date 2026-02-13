export default function Footer() {
    return (
        <footer className="w-full border-t">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-6 text-sm">
                <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                    <span className="font-medium">© 2026 E-Commerce</span>
                    <div className="flex gap-4">
                        <a className="underline" href="#">
                            Privacy
                        </a>
                        <a className="underline" href="#">
                            Terms
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
