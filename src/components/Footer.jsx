import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-10 text-sm text-slate-500 sm:flex-row sm:px-6">
        <Logo />
        <p>El sistema operativo del fútbol amateur.</p>
        <p>© {new Date().getFullYear()} Weball</p>
      </div>
    </footer>
  )
}
