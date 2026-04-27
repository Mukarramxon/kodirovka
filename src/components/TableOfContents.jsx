import { List } from 'lucide-react';

const tocBySection = {
  'start-here': [
    { id: 'start-here-overview', label: 'Обзор' },
    { id: 'start-here-path', label: 'Путь онбординга' },
    { id: 'start-here-values', label: 'Наши ценности' },
    { id: 'start-here-resources', label: 'Полезные ресурсы' },
  ],
  frameworks: [
    { id: 'frameworks-overview', label: 'Обзор' },
    { id: 'frameworks-scrum', label: 'Scrum' },
    { id: 'frameworks-kanban', label: 'Kanban' },
    { id: 'frameworks-comparison', label: 'Когда что применять' },
  ],
  estimation: [
    { id: 'estimation-overview', label: 'Обзор' },
    { id: 'estimation-comparison', label: 'Points vs. футболки' },
    { id: 'estimation-fibonacci', label: 'Шкала Фибоначчи' },
    { id: 'estimation-tshirt', label: 'Правила размеров' },
  ],
  metrics: [
    { id: 'metrics-overview', label: 'Обзор' },
    { id: 'metrics-velocity', label: 'Velocity' },
    { id: 'metrics-cycle-time', label: 'Cycle Time' },
    { id: 'metrics-lead-time', label: 'Lead Time' },
    { id: 'metrics-say-do', label: 'Say/Do Ratio' },
  ],
  ceremonies: [
    { id: 'ceremonies-overview', label: 'Обзор' },
    { id: 'ceremonies-timeline', label: 'Таймлайн церемоний' },
    { id: 'ceremonies-planning', label: 'Планирование спринта' },
    { id: 'ceremonies-standup', label: 'Дейли-стендап' },
    { id: 'ceremonies-refinement', label: 'Уточнение (PBR)' },
    { id: 'ceremonies-review', label: 'Обзор спринта' },
    { id: 'ceremonies-retro', label: 'Ретроспектива' },
    { id: 'ceremonies-dor-dod', label: 'DoR и DoD' },
  ],
  tools: [
    { id: 'tools-overview', label: 'Обзор' },
    { id: 'tools-jira', label: 'Лучшие практики Jira' },
    { id: 'tools-jql', label: 'JQL-фильтры' },
    { id: 'tools-confluence', label: 'Интеграция Confluence' },
  ],
  'sprint-goals': [
    { id: 'sprint-goals-overview', label: 'Обзор' },
    { id: 'sprint-goals-writing', label: 'Как писать цели' },
    { id: 'sprint-goals-examples', label: 'Примеры' },
    { id: 'sprint-goals-antipatterns', label: 'Анти-паттерны' },
  ],
  environments: [
    { id: 'environments-overview', label: 'Обзор' },
    { id: 'environments-flow', label: 'Поток кода' },
    { id: 'environments-details', label: 'Описание сред' },
    { id: 'environments-rules', label: 'Золотые правила' },
  ],
  'code-standards': [
    { id: 'code-standards-overview', label: 'Обзор' },
    { id: 'code-standards-cursor', label: 'Cursor и Vibecoding' },
    { id: 'code-standards-pr', label: 'PR-ревью' },
    { id: 'code-standards-docs', label: 'Документация' },
  ],
  architecture: [
    { id: 'architecture-overview', label: 'Обзор' },
    { id: 'architecture-arm', label: 'Процесс ARM' },
    { id: 'architecture-replication', label: 'Репликация данных' },
    { id: 'architecture-principles', label: 'Принципы' },
  ],
  'release-management': [
    { id: 'release-overview', label: 'Обзор' },
    { id: 'release-jira', label: 'Мобильная платформа' },
    { id: 'release-workflow', label: 'Workflow' },
    { id: 'release-fix-version-management', label: 'Управление Releases' },
    { id: 'release-process', label: 'Релизный процесс' },
    { id: 'release-versioning', label: 'Версионирование' },
    { id: 'release-rollback', label: 'Rollback-план' },
  ],
  handoff: [
    { id: 'handoff-overview', label: 'Обзор' },
    { id: 'handoff-figma', label: 'Figma → Dev' },
    { id: 'handoff-responsive', label: 'Адаптивная вёрстка' },
  ],
  discovery: [
    { id: 'discovery-overview', label: 'Обзор' },
    { id: 'discovery-pbr', label: 'Процесс PBR' },
    { id: 'discovery-bo-sync', label: 'Синхронизация с BO' },
    { id: 'discovery-quality', label: 'Качество Discovery' },
  ],
};

export default function TableOfContents({ activeSection }) {
  const items = tocBySection[activeSection] || [];

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <aside className="hidden xl:block w-56 flex-shrink-0">
      <div className="sticky top-6">
        <div className="flex items-center gap-2 mb-3">
          <List className="w-4 h-4 text-slate-400" />
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            На этой странице
          </span>
        </div>
        <ul className="space-y-1 border-l border-slate-200">
          {items.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleClick(item.id)}
                className="block w-full text-left pl-3 py-1 text-[13px] text-slate-500 hover:text-primary-600 hover:border-l-2 hover:border-primary-600 hover:-ml-[1px] transition-colors"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
