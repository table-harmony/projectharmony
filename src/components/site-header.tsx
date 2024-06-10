import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-muted/60">
      <div className="container flex h-14 items-center justify-between gap-2">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton>Sign in</SignInButton>
        </SignedOut>
      </div>
    </header>
  );
}
