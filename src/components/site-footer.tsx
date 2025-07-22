import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background ">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Thang Dev. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <div className="flex gap-4">
            <Link
              target="_blank"
              href="https://x.com/hoquocthang1507"
              className="text-muted-foreground hover:text-foreground"
            >
              Twitter
            </Link>
            <Link
              target="_blank"
              href="https://github.com/ThagDev"
              className="text-muted-foreground hover:text-foreground"
            >
              GitHub
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              LinkedIn
            </Link>
          </div>
          <div className="h-4 w-px bg-muted-foreground/20 hidden md:block" />
          <div className="flex gap-4">
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="/security"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Security Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
