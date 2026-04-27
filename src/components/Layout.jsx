import { useState, useEffect, useRef } from 'react';
import { Menu, Search, X } from 'lucide-react';
import Sidebar from './Sidebar';
import TableOfContents from './TableOfContents';
import { navGroups } from './Sidebar';

const allPages = navGroups.flatMap((g) =>
  g.items.map((item) => ({ ...item, group: g.label }))
);

export default function Layout({ children, activeSection, onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
        setTimeout(() => searchRef.current?.focus(), 50);
      }
      if (e.key === 'Escape') setSearchOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const filtered = searchQuery.trim()
    ? allPages.filter(
        (p) =>
          p.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.sub.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.group.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleSelect = (id) => {
    onNavigate(id);
    setSearchQuery('');
    setSearchOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar
        activeSection={activeSection}
        onNavigate={onNavigate}
        mobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
      />

      <div className="flex-1 flex flex-col min-w-0">
        <header
          className={`
            sticky top-0 z-30 flex items-center gap-4 px-4 sm:px-6 lg:px-8 h-14
            bg-white/80 backdrop-blur-md border-b transition-colors
            ${scrolled ? 'border-slate-200' : 'border-transparent'}
          `}
        >
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2 -ml-2 rounded-md hover:bg-slate-100 text-slate-600"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="flex-1 flex items-center gap-3">
            <div className="relative max-w-md flex-1 hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                ref={searchRef}
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSearchOpen(true);
                }}
                onFocus={() => setSearchOpen(true)}
                placeholder="Поиск по разделам... (⌘K)"
                className="w-full pl-9 pr-4 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              {searchQuery && (
                <button
                  onClick={() => { setSearchQuery(''); setSearchOpen(false); }}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <X className="w-3.5 h-3.5 text-slate-400 hover:text-slate-600" />
                </button>
              )}

              {searchOpen && filtered.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-lg shadow-lg overflow-hidden z-50">
                  {filtered.map((page) => (
                    <button
                      key={page.id}
                      onClick={() => handleSelect(page.id)}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-primary-50 transition-colors"
                    >
                      <page.icon className="w-4 h-4 text-slate-400" />
                      <div className="flex-1 min-w-0">
                        <span className="block text-sm text-slate-800">{page.label}</span>
                        <span className="block text-[11px] text-slate-400">{page.group} · {page.sub}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {searchOpen && searchQuery.trim() && filtered.length === 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-lg shadow-lg z-50 px-4 py-3">
                  <p className="text-sm text-slate-500">Ничего не найдено по запросу «{searchQuery}»</p>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-primary-50 text-primary-700 border border-primary-200">
              V1.0
            </span>
          </div>
        </header>

        <div className="flex-1 flex gap-6 px-4 sm:px-6 lg:px-8 py-6">
          <main className="flex-1 min-w-0 max-w-4xl">{children}</main>
          <TableOfContents activeSection={activeSection} />
        </div>
      </div>

      {searchOpen && (
        <div className="fixed inset-0 z-20 sm:hidden" onClick={() => setSearchOpen(false)} />
      )}
    </div>
  );
}
