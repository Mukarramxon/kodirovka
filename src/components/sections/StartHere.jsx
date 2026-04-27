import {
  Compass,
  CheckCircle2,
  BookOpen,
  Rocket,
  Code2,
  Palette,
  ArrowRight,
  Clock,
  Star,
  ExternalLink,
} from 'lucide-react';

function Card({ children, className = '' }) {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white shadow-sm ${className}`}>
      {children}
    </div>
  );
}

const onboardingPath = [
  {
    day: 'День 1',
    title: 'Культура и процессы Click',
    page: 'start-here',
    icon: Compass,
    color: 'bg-primary-500',
    desc: 'Познакомьтесь со структурой организации, ценностями и тем, как мы работаем.',
  },
  {
    day: 'День 1–2',
    title: 'Agile-фреймворк: Scrum и Kanban',
    page: 'frameworks',
    icon: BookOpen,
    color: 'bg-blue-500',
    desc: 'Поймите, какие фреймворки мы используем и почему. Изучите церемонии и метрики.',
  },
  {
    day: 'День 2–3',
    title: 'SDLC: среды и стандарты кода',
    page: 'environments',
    icon: Code2,
    color: 'bg-emerald-500',
    desc: 'Разберитесь в наших средах (Local → Prod), стандартах кодирования и процессе PR-ревью.',
  },
  {
    day: 'День 3–4',
    title: 'Архитектура и релизы',
    page: 'architecture',
    icon: Rocket,
    color: 'bg-violet-500',
    desc: 'Познакомьтесь с системной архитектурой ARM, асинхронной репликацией и процессом деплоя.',
  },
  {
    day: 'День 4–5',
    title: 'Продукт и дизайн: Handoff и Discovery',
    page: 'handoff',
    icon: Palette,
    color: 'bg-amber-500',
    desc: 'Узнайте, как проходит передача из Figma в разработку и как мы проводим Discovery.',
  },
];

const quickResources = [
  { label: 'Jira Data Center', url: '#', desc: 'Управление задачами и спринтами' },
  { label: 'Confluence', url: '#', desc: 'База знаний и документация' },
  { label: 'Click Office', url: '#', desc: 'Внутренний портал компании' },
  { label: 'Figma', url: '#', desc: 'Дизайн-система и макеты' },
];

export default function StartHere({ onNavigate }) {
  return (
    <section>
      <div id="start-here-overview" className="mb-8 scroll-mt-20">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-primary-50">
            <Compass className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Добро пожаловать в Click!</h2>
        </div>
        <p className="text-slate-600 leading-relaxed ml-[52px]">
          Это ваш стартовый гид. За первую неделю пройдите 5 ключевых страниц, чтобы быстро
          влиться в процессы и культуру компании.
        </p>
      </div>

      <h3 id="start-here-path" className="text-lg font-semibold text-slate-900 mt-10 mb-4 scroll-mt-20 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
        Путь онбординга: первая неделя
      </h3>

      <Card className="p-6 mb-8">
        <div className="relative">
          <div className="absolute left-[18px] top-4 bottom-4 w-0.5 bg-slate-200" />
          <div className="space-y-5">
            {onboardingPath.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="flex items-start gap-4 relative">
                  <div className={`w-9 h-9 rounded-full ${step.color} flex items-center justify-center flex-shrink-0 z-10`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1 bg-slate-50 rounded-lg px-4 py-3 border border-slate-100">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-slate-200 text-slate-700">
                            {step.day}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-slate-900">{step.title}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{step.desc}</p>
                      </div>
                      <button
                        onClick={() => onNavigate(step.page)}
                        className="mt-1 flex-shrink-0 p-1.5 rounded-md hover:bg-primary-100 text-primary-600 transition-colors"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Card>

      <h3 id="start-here-values" className="text-lg font-semibold text-slate-900 mt-10 mb-4 scroll-mt-20 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
        Наши ценности
      </h3>

      <div className="grid sm:grid-cols-2 gap-3 mb-8">
        {[
          { icon: Star, title: 'Прозрачность', desc: 'Мы открыто делимся информацией — от бэклога до финансов спринта. Никаких «чёрных ящиков».' },
          { icon: Clock, title: 'Предсказуемая поставка', desc: 'Say/Do Ratio > 80%. Мы обещаем только то, что можем доставить, и доставляем то, что обещали.' },
          { icon: CheckCircle2, title: 'Качество по умолчанию', desc: 'Definition of Done — не формальность. Тесты, ревью, документация — часть каждой задачи.' },
          { icon: Rocket, title: 'Непрерывное улучшение', desc: 'Каждая ретроспектива заканчивается конкретными экшн-айтемами. Мы измеряем и адаптируемся.' },
        ].map((v) => {
          const Icon = v.icon;
          return (
            <Card key={v.title} className="p-5">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary-50 flex-shrink-0">
                  <Icon className="w-4 h-4 text-primary-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{v.title}</p>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <h3 id="start-here-resources" className="text-lg font-semibold text-slate-900 mt-10 mb-4 scroll-mt-20 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
        Полезные ресурсы
      </h3>

      <div className="grid sm:grid-cols-2 gap-3">
        {quickResources.map((r) => (
          <a
            key={r.label}
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 p-4 rounded-xl border border-slate-200 bg-white shadow-sm hover:border-primary-300 hover:shadow-md transition-all"
          >
            <div className="p-2 rounded-lg bg-slate-50 group-hover:bg-primary-50 transition-colors">
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-primary-600 transition-colors" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-900 group-hover:text-primary-700 transition-colors">{r.label}</p>
              <p className="text-xs text-slate-500">{r.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
