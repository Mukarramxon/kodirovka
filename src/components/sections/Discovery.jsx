import {
  Search,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Users,
  MessageSquare,
  ClipboardCheck,
  ArrowRight,
  FileText,
  Target,
} from 'lucide-react';

function Card({ children, className = '' }) {
  return <div className={`rounded-xl border border-slate-200 bg-white shadow-sm ${className}`}>{children}</div>;
}

function Badge({ children, variant = 'default' }) {
  const s = { default: 'bg-slate-100 text-slate-700', primary: 'bg-primary-50 text-primary-700', success: 'bg-emerald-50 text-emerald-700', warning: 'bg-amber-50 text-amber-700' };
  return <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${s[variant]}`}>{children}</span>;
}

const pbrFlow = [
  { step: 'Подготовка PO', icon: FileText, color: 'bg-blue-500', desc: 'Product Owner готовит черновики историй с бизнес-контекстом и критериями приёмки.' },
  { step: 'Синхронизация с BO', icon: Users, color: 'bg-violet-500', desc: 'PO встречается с Business Owners для валидации приоритетов и бизнес-ценности.' },
  { step: 'Командное PBR', icon: ClipboardCheck, color: 'bg-emerald-500', desc: 'Команда разработки уточняет истории: вопросы, декомпозиция, оценка.' },
  { step: 'Ready for Sprint', icon: Target, color: 'bg-amber-500', desc: 'Истории соответствуют DoR и готовы к планированию спринта.' },
];

export default function Discovery() {
  return (
    <section>
      <div id="discovery-overview" className="mb-8 scroll-mt-20">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-primary-50">
            <Search className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Discovery</h2>
        </div>
        <p className="text-slate-600 leading-relaxed ml-[52px]">
          Discovery — это процесс превращения бизнес-потребностей в чёткие, готовые к разработке
          пользовательские истории. Он включает PBR, синхронизацию с Business Owners и валидацию
          требований.
        </p>
      </div>

      <h3 id="discovery-pbr" className="text-lg font-semibold text-slate-900 mt-10 mb-4 scroll-mt-20 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
        Процесс Product Backlog Refinement
      </h3>

      <Card className="p-6 mb-8">
        <div className="relative">
          <div className="absolute left-[18px] top-4 bottom-4 w-0.5 bg-slate-200" />
          <div className="space-y-5">
            {pbrFlow.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-center gap-4 relative">
                  <div className={`w-9 h-9 rounded-full ${item.color} flex items-center justify-center flex-shrink-0 z-10`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1 bg-slate-50 rounded-lg px-4 py-3 border border-slate-100">
                    <p className="text-sm font-medium text-slate-900">{item.step}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Card>

      <h3 id="discovery-bo-sync" className="text-lg font-semibold text-slate-900 mt-10 mb-4 scroll-mt-20 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
        Синхронизация с Business Owners
      </h3>

      <Card>
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Business Owners (BO) — ключевые стейкхолдеры, владеющие бизнес-доменом. Регулярная
                синхронизация PO с BO гарантирует, что команда работает над самыми ценными задачами.
              </p>
              <div className="space-y-3">
                {[
                  { icon: MessageSquare, title: 'Еженедельная синхронизация', desc: '30 мин. PO и BO обсуждают приоритеты, новые запросы и изменения рынка.' },
                  { icon: ClipboardCheck, title: 'Валидация бэклога', desc: 'BO подтверждает бизнес-ценность и приоритет эпиков перед PI Planning.' },
                  { icon: Users, title: 'Sprint Review', desc: 'BO участвует в обзоре спринта, даёт обратную связь по инкременту.' },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-slate-100 flex-shrink-0">
                        <Icon className="w-4 h-4 text-slate-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900">{item.title}</p>
                        <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-50 rounded-lg p-5 border border-slate-100">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Роли в Discovery</p>
                <div className="space-y-3">
                  {[
                    { role: 'Business Owner', badge: 'warning', desc: 'Определяет бизнес-потребность, приоритеты, критерии успеха' },
                    { role: 'Product Owner', badge: 'primary', desc: 'Переводит потребности в истории, управляет бэклогом' },
                    { role: 'Дизайнер', badge: 'success', desc: 'Создаёт UX/UI, проводит исследования, прототипирование' },
                    { role: 'Техлид', badge: 'default', desc: 'Оценивает техническую осуществимость, предлагает архитектуру' },
                  ].map((item) => (
                    <div key={item.role}>
                      <div className="flex items-center gap-2 mb-0.5">
                        <Badge variant={item.badge}>{item.role}</Badge>
                      </div>
                      <p className="text-xs text-slate-600 pl-0.5">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <h3 id="discovery-quality" className="text-lg font-semibold text-slate-900 mt-10 mb-4 scroll-mt-20 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
        Качество Discovery
      </h3>

      <Card className="p-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Признаки хорошего Discovery</p>
            <div className="space-y-2">
              {[
                'Истории попадают в спринт с первого раза (без возвратов)',
                'Команда задаёт мало уточняющих вопросов на планировании',
                'Критерии приёмки конкретны и проверяемы',
                'Дизайн утверждён до начала разработки',
                'Зависимости выявлены заранее',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Признаки слабого Discovery</p>
            <div className="space-y-2">
              {[
                'Истории возвращаются из спринта в бэклог',
                'Планирование затягивается из-за дискуссий о scope',
                '«Мы поймём по ходу» вместо чётких критериев',
                'Разработчики узнают о зависимостях в середине спринта',
                'Дизайн меняется после начала разработки',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
