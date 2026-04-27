import { useState } from 'react';
import {
  BookOpen,
  BarChart3,
  Users,
  Wrench,
  Target,
  Calculator,
  ChevronRight,
  ChevronDown,
  X,
  Building2,
  Rocket,
  Code2,
  Server,
  FileCode,
  Layers,
  PackageCheck,
  Palette,
  ArrowRightLeft,
  Search,
  Compass,
  ExternalLink,
} from 'lucide-react';

const navGroups = [
  {
    id: 'company',
    label: 'Компания',
    icon: Building2,
    items: [
      { id: 'start-here', label: 'Начни отсюда', icon: Compass, sub: 'Онбординг нового сотрудника' },
    ],
  },
  {
    id: 'agile',
    label: 'Agile-фреймворк',
    icon: Rocket,
    items: [
      { id: 'frameworks', label: 'Фреймворки', icon: BookOpen, sub: 'Scrum и Kanban' },
      { id: 'estimation', label: 'Оценка', icon: Calculator, sub: 'Story Points и размеры' },
      { id: 'metrics', label: 'Метрики', icon: BarChart3, sub: 'Velocity и Cycle Time' },
      { id: 'ceremonies', label: 'Церемонии', icon: Users, sub: 'События и чек-листы' },
      { id: 'tools', label: 'Инструменты', icon: Wrench, sub: 'Jira и Confluence' },
      { id: 'sprint-goals', label: 'Цели спринта', icon: Target, sub: 'Ориентация на результат' },
    ],
  },
  {
    id: 'sdlc',
    label: 'SDLC',
    icon: Code2,
    items: [
      { id: 'environments', label: 'Среды', icon: Server, sub: 'Local → Dev → Staging → Prod' },
      { id: 'code-standards', label: 'Стандарты кода', icon: FileCode, sub: 'Cursor, PR, документация' },
      { id: 'architecture', label: 'Архитектура', icon: Layers, sub: 'ARM, сервисы, репликация' },
      { id: 'release-management', label: 'Релиз-менеджмент', icon: PackageCheck, sub: 'Деплой и версионирование' },
    ],
  },
  {
    id: 'product',
    label: 'Продукт и дизайн',
    icon: Palette,
    items: [
      { id: 'handoff', label: 'Передача в разработку', icon: ArrowRightLeft, sub: 'Figma → Development' },
      { id: 'discovery', label: 'Discovery', icon: Search, sub: 'PBR и синхронизация с BO' },
    ],
  },
];

const quickLinks = [
  { label: 'Jira Data Center', url: '#' },
  { label: 'Confluence', url: '#' },
  { label: 'Click Office', url: '#' },
];

export default function Sidebar({ activeSection, onNavigate, mobileOpen, onCloseMobile }) {
  const initialOpen = navGroups.reduce((acc, g) => {
    acc[g.id] = g.items.some((i) => i.id === activeSection);
    return acc;
  }, {});
  const [openGroups, setOpenGroups] = useState(() => {
    const open = {};
    navGroups.forEach((g) => {
      open[g.id] = g.items.some((i) => i.id === activeSection) || g.id === 'company';
    });
    return open;
  });

  const toggleGroup = (gid) =>
    setOpenGroups((prev) => ({ ...prev, [gid]: !prev[gid] }));

  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 z-50 h-full w-72 bg-white border-r border-slate-200
          flex flex-col transition-transform duration-300
          lg:translate-x-0 lg:static lg:z-auto
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-primary-600 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-base font-bold text-slate-900 leading-tight">Click Playbook</h1>
              <span className="text-xs text-slate-500">v1.0</span>
            </div>
          </div>
          <button
            onClick={onCloseMobile}
            className="lg:hidden p-1.5 rounded-md hover:bg-slate-100 text-slate-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-3 px-3">
          {navGroups.map((group) => {
            const GroupIcon = group.icon;
            const isOpen = openGroups[group.id];
            const hasActive = group.items.some((i) => i.id === activeSection);

            return (
              <div key={group.id} className="mb-1">
                <button
                  onClick={() => toggleGroup(group.id)}
                  className={`
                    w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left
                    transition-all duration-150 group
                    ${hasActive
                      ? 'text-primary-700 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                    }
                  `}
                >
                  <GroupIcon className={`w-4 h-4 flex-shrink-0 ${hasActive ? 'text-primary-600' : 'text-slate-400'}`} />
                  <span className="flex-1 text-[13px] font-semibold uppercase tracking-wide">{group.label}</span>
                  {isOpen
                    ? <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                    : <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  }
                </button>

                {isOpen && (
                  <ul className="ml-3 pl-3 border-l border-slate-200 mt-0.5 mb-2 space-y-0.5">
                    {group.items.map((item) => {
                      const Icon = item.icon;
                      const isActive = activeSection === item.id;
                      return (
                        <li key={item.id}>
                          <button
                            onClick={() => {
                              onNavigate(item.id);
                              onCloseMobile();
                            }}
                            className={`
                              w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left
                              transition-all duration-150 group
                              ${isActive
                                ? 'bg-primary-50 text-primary-700 font-medium'
                                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                              }
                            `}
                          >
                            <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-primary-600' : 'text-slate-400 group-hover:text-slate-500'}`} />
                            <div className="flex-1 min-w-0">
                              <span className="block text-sm leading-tight">{item.label}</span>
                              <span className={`block text-[11px] leading-tight mt-0.5 ${isActive ? 'text-primary-500' : 'text-slate-400'}`}>
                                {item.sub}
                              </span>
                            </div>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </nav>

        <div className="px-4 py-3 border-t border-slate-200 space-y-3">
          <div>
            <p className="px-3 mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Быстрые ссылки
            </p>
            <div className="space-y-0.5">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm text-slate-600 hover:bg-slate-50 hover:text-primary-600 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="px-3 py-2.5 rounded-lg bg-slate-50 border border-slate-200">
            <p className="text-xs font-medium text-slate-700">Нужна помощь?</p>
            <p className="text-[11px] text-slate-500 mt-0.5">Обратитесь к вашему Scrum-мастеру или Agile-коучу.</p>
          </div>
        </div>
      </aside>
    </>
  );
}

export { navGroups };
