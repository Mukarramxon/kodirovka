import {
  Layers,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  Database,
  RefreshCw,
  Shield,
  GitBranch,
} from 'lucide-react';

function Card({ children, className = '' }) {
  return <div className={`rounded-xl border border-slate-200 bg-white shadow-sm ${className}`}>{children}</div>;
}

function Badge({ children, variant = 'default' }) {
  const s = { default: 'bg-slate-100 text-slate-700', primary: 'bg-primary-50 text-primary-700', success: 'bg-emerald-50 text-emerald-700', warning: 'bg-amber-50 text-amber-700' };
  return <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${s[variant]}`}>{children}</span>;
}

export default function Architecture() {
  return (
    <section>
      <div id="architecture-overview" className="mb-8 scroll-mt-20">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-primary-50">
            <Layers className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Системная архитектура</h2>
        </div>
        <p className="text-slate-600 leading-relaxed ml-[52px]">
          Архитектурные стандарты Click обеспечивают масштабируемость, отказоустойчивость и
          предсказуемость системы. Любое изменение сервисов проходит через процесс ARM.
        </p>
      </div>

      <h3 id="architecture-arm" className="text-lg font-semibold text-slate-900 mt-10 mb-4 scroll-mt-20 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
        Процесс ARM (Architecture Review Meeting)
      </h3>

      <Card>
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                ARM — обязательный процесс для любого создания или существенного изменения сервисов.
                Он гарантирует, что архитектурные решения принимаются осознанно, с участием всех
                заинтересованных сторон.
              </p>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Инициация', desc: 'Разработчик создаёт ADR (Architecture Decision Record) в Confluence с описанием проблемы и предлагаемого решения.' },
                  { step: '2', title: 'Ревью', desc: 'Техлид и архитектор проводят ревью ADR. Обсуждаются альтернативы, риски, влияние на другие сервисы.' },
                  { step: '3', title: 'ARM-встреча', desc: 'Презентация решения на ARM-встрече. Участники: архитекторы, техлиды затронутых команд, DevOps.' },
                  { step: '4', title: 'Решение', desc: 'ADR обновляется статусом: Approved / Rejected / Needs Revision. Утверждённый ADR становится частью документации.' },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-primary-700">{item.step}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">{item.title}</p>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 rounded-lg p-5 border border-slate-100">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Когда нужен ARM</p>
              <div className="space-y-3">
                {[
                  { trigger: 'Новый микросервис', badge: 'warning' },
                  { trigger: 'Новая база данных или хранилище', badge: 'warning' },
                  { trigger: 'Изменение API-контракта (breaking change)', badge: 'warning' },
                  { trigger: 'Новая внешняя интеграция', badge: 'warning' },
                  { trigger: 'Миграция между технологиями', badge: 'warning' },
                  { trigger: 'Изменение паттерна репликации данных', badge: 'warning' },
                ].map((item) => (
                  <div key={item.trigger} className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                    <span className="text-sm text-slate-700">{item.trigger}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>

      <h3 id="architecture-replication" className="text-lg font-semibold text-slate-900 mt-10 mb-4 scroll-mt-20 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
        Асинхронная репликация данных
      </h3>

      <Card>
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                В микросервисной архитектуре Click сервисы не обращаются напрямую к БД друг друга.
                Данные реплицируются асинхронно через событийную шину (event bus).
              </p>
              <div className="space-y-3">
                {[
                  { icon: Database, title: 'Принцип единого владельца', desc: 'Каждая сущность имеет ровно один сервис-владелец. Только он пишет в свою БД.' },
                  { icon: RefreshCw, title: 'Event-driven репликация', desc: 'Изменения публикуются как события (events). Потребители подписываются и обновляют свои read-модели.' },
                  { icon: Shield, title: 'Идемпотентность', desc: 'Все обработчики событий идемпотентны. Повторная обработка одного и того же события не приводит к дублированию.' },
                  { icon: GitBranch, title: 'Eventual Consistency', desc: 'Система принимает eventual consistency. Критичные операции используют Saga-паттерн для гарантий.' },
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
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Стандарт событий</p>
                <div className="bg-slate-900 rounded-lg p-4 text-sm font-mono text-slate-300 leading-relaxed overflow-x-auto">
                  <pre>{`{
  "event_id": "uuid-v4",
  "event_type": "order.created",
  "source": "order-service",
  "timestamp": "ISO-8601",
  "version": "1.0",
  "data": { ... },
  "metadata": {
    "correlation_id": "uuid",
    "causation_id": "uuid"
  }
}`}</pre>
                </div>
              </div>
              <div className="bg-primary-50 rounded-lg p-4 border border-primary-100">
                <div className="flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-primary-700 leading-relaxed">
                    Всегда включайте <code className="text-xs bg-primary-100 px-1 rounded">correlation_id</code> для
                    сквозной трассировки запросов через все сервисы.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <h3 id="architecture-principles" className="text-lg font-semibold text-slate-900 mt-10 mb-4 scroll-mt-20 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
        Архитектурные принципы
      </h3>

      <div className="grid sm:grid-cols-2 gap-3">
        {[
          { title: 'API-First', desc: 'Контракт API согласовывается до начала реализации. OpenAPI-спецификация — источник истины.' },
          { title: 'Наблюдаемость', desc: 'Логи, метрики, трейсы — три столпа. Каждый сервис экспортирует их в единую систему мониторинга.' },
          { title: 'Fail-Fast', desc: 'Сервисы падают быстро и предсказуемо. Circuit breaker защищает от каскадных отказов.' },
          { title: '12-Factor App', desc: 'Все сервисы следуют принципам 12-Factor: конфигурация через env, stateless-процессы, port binding.' },
        ].map((p) => (
          <Card key={p.title} className="p-5">
            <p className="text-sm font-semibold text-slate-900 mb-1">{p.title}</p>
            <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
