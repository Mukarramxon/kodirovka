import {
  Layers,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  FileText,
  ClipboardCheck,
  Users,
  MessageSquare,
  BookOpen,
  Shield,
  Scale,
  Target,
  RefreshCw,
  Columns3,
  Info,
} from 'lucide-react';

function Card({ children, className = '' }) {
  return <div className={`rounded-xl border border-slate-200 bg-white shadow-sm ${className}`}>{children}</div>;
}

function Badge({ children, variant = 'default' }) {
  const s = { default: 'bg-slate-100 text-slate-700', primary: 'bg-primary-50 text-primary-700', success: 'bg-emerald-50 text-emerald-700', warning: 'bg-amber-50 text-amber-700', violet: 'bg-violet-50 text-violet-700' };
  return <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${s[variant]}`}>{children}</span>;
}

const kanbanStatuses = [
  { label: 'Новая', color: 'bg-slate-200 text-slate-700' },
  { label: 'Готова к рассмотрению', color: 'bg-blue-100 text-blue-700' },
  { label: 'На рассмотрении', color: 'bg-amber-100 text-amber-700' },
  { label: 'На доработке', color: 'bg-orange-100 text-orange-700' },
  { label: 'Утверждено', color: 'bg-emerald-100 text-emerald-700' },
  { label: 'Отклонено', color: 'bg-rose-100 text-rose-700' },
  { label: 'Закрыто', color: 'bg-slate-300 text-slate-800' },
];

const taskTypes = [
  {
    type: 'Рассмотрение архитектурного документа',
    icon: FileText,
    desc: 'Запрос на ревью архитектурного решения. Документ оформлен по шаблону, содержит диаграммы, описание решений и заполненные чек-листы.',
    result: 'Утверждённая архитектура либо перечень замечаний и требуемых доработок.',
  },
  {
    type: 'Ревью ADR',
    icon: BookOpen,
    desc: 'Анализ отдельного архитектурного решения (ADR) — выбор технологий, изменение архитектуры, новая интеграция.',
    result: 'Принятое или отклонённое ADR с сохранением в реестре решений.',
  },
  {
    type: 'Запрос на консультацию',
    icon: MessageSquare,
    desc: 'Команде нужен совет комитета по конкретному вопросу. Полный архитектурный документ не требуется.',
    result: 'Протокол с рекомендациями, при необходимости — задача на ADR или изменение архитектуры.',
  },
];

export default function Architecture() {
  return (
    <section>
      <div id="architecture-overview" className="mb-8 scroll-mt-20">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-primary-50">
            <Layers className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Архитектурный комитет</h2>
        </div>
        <p className="text-slate-600 leading-relaxed ml-[52px]">
          Архитектурный комитет — совещательный орган, который рассматривает все ключевые технические
          решения: новые проекты, смену стека, изменения архитектуры. Комитет обеспечивает качество
          и согласованность технических решений через регламентированный процесс.
        </p>
      </div>

      {/* Принципы */}
      <h3 id="architecture-principles" className="text-lg font-semibold text-slate-900 mt-10 mb-4 scroll-mt-20 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
        Принципы работы комитета
      </h3>

      <Card className="p-6 mb-6">
        <div className="bg-primary-50 rounded-lg p-4 border border-primary-100 mb-6">
          <div className="flex items-start gap-3">
            <Target className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-primary-800 font-semibold leading-relaxed">
              Архитектура — средство, а не самоцель. Комитет ищет оптимальное решение для конкретного проекта.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { icon: RefreshCw, title: 'Повторное использование важнее изобретений', desc: 'Прежде чем создавать новое — проверяем, есть ли готовое решение внутри компании.' },
            { icon: Users, title: 'Решение — всегда коллективное', desc: 'Комитет — совет, а не диктатор. Финальное решение принимается консенсусом участников.' },
            { icon: FileText, title: 'Документы — для команды, а не для галочки', desc: 'Каждый документ должен приносить реальную пользу проектной команде.' },
            { icon: Shield, title: 'Ответственность — у проектной команды', desc: 'Комитет рекомендует и утверждает, но за реализацию отвечает команда проекта.' },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-md bg-white border border-slate-200 flex-shrink-0">
                    <Icon className="w-4 h-4 text-slate-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Типы задач */}
      <h3 id="architecture-arm" className="text-lg font-semibold text-slate-900 mt-10 mb-4 scroll-mt-20 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
        Типы задач комитета
      </h3>

      <div className="space-y-3 mb-8">
        {taskTypes.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.type} className="p-5">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-violet-50 flex-shrink-0">
                  <Icon className="w-5 h-5 text-violet-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-900 mb-1">{item.type}</p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-2">{item.desc}</p>
                  <div className="flex items-start gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-emerald-700 font-medium">{item.result}</p>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Definition of Ready */}
      <h3 id="architecture-dor" className="text-lg font-semibold text-slate-900 mt-10 mb-4 scroll-mt-20 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
        Definition of Ready (DoR)
      </h3>

      <Card className="p-6 mb-8">
        <div className="bg-amber-50 rounded-lg p-4 border border-amber-100 mb-6">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-amber-800 leading-relaxed">
              <span className="font-semibold">DoR</span> — чек-лист критериев, подтверждающих, что задача готова к рассмотрению на комитете. Если все пункты выполнены — можно начинать обсуждение.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {[
            {
              title: 'Собраны все исходные материалы',
              items: [
                'Для архитектурного документа: оформлен по шаблону, содержит все разделы (диаграммы, описание решений, чек-листы по безопасности и производительности). Нет пустых разделов.',
                'Для ADR: описан контекст, проблема, минимум два альтернативных варианта и предложенное решение с обоснованием. Статус — Proposed.',
                'Для консультации: вопрос чётко сформулирован, описан контекст, приложены ссылки на требования.',
              ],
            },
            {
              title: 'Определены участники и стейкхолдеры',
              items: [
                'Известно, кто защищает решение и кого пригласить на встречу.',
                'Все заинтересованные стороны поставлены в известность и готовы к ревью.',
                'При необходимости составлен RACI (Responsible, Accountable, Consulted, Informed).',
              ],
            },
            {
              title: 'Задача соответствует стратегии и требованиям',
              items: [
                'Проблема значима и актуальна к рассмотрению именно сейчас — откладывать нельзя, но и преждевременным решение не является.',
                'Понятно, какие качества критически важны: безопасность, масштабируемость, производительность.',
                'Для архитектурного документа — есть раздел с нефункциональными требованиями.',
              ],
            },
            {
              title: 'Альтернативы проработаны',
              items: [
                'Представлено несколько вариантов решения с анализом плюсов и минусов.',
                'Если представлен только один вариант — это обосновано.',
              ],
            },
            {
              title: 'Подготовлен шаблон для фиксации решения',
              items: [
                'Если по итогам ревью потребуется ADR — шаблон заготовлен заранее.',
                'Если решение оформляется протоколом — назначен ответственный за ведение протокола.',
              ],
            },
          ].map((block, idx) => (
            <div key={idx} className="bg-slate-50 rounded-lg p-4 border border-slate-100">
              <div className="flex items-start gap-3 mb-3">
                <ClipboardCheck className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm font-semibold text-slate-900">{block.title}</p>
              </div>
              <div className="space-y-2 ml-7">
                {block.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-slate-600 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Definition of Done */}
      <h3 id="architecture-dod" className="text-lg font-semibold text-slate-900 mt-10 mb-4 scroll-mt-20 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
        Definition of Done (DoD)
      </h3>

      <Card className="p-6 mb-8">
        <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100 mb-6">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-emerald-800 leading-relaxed">
              <span className="font-semibold">DoD</span> — набор критериев, подтверждающих, что работа по задаче полностью завершена. Задача не закрывается, пока все пункты не выполнены.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {[
            {
              title: 'Принято и задокументировано решение',
              desc: 'По итогам обсуждения решение утверждается или отклоняется. Статус фиксируется в ADR (Accepted) или протоколе (Одобрено). Если требуются доработки — указываются причины и рекомендации.',
            },
            {
              title: 'Обратная связь обработана',
              desc: 'Все замечания комитета обработаны. Если решение условно одобрено — доработки внесены, документ повторно показан ответственным членам комитета и подтверждён. Если отклонено — команда получила чёткие инструкции.',
            },
            {
              title: 'Соответствие требованиям проверено',
              desc: 'Решение соответствует исходным критериям и корпоративным стандартам. Критичные требования из DoR закрыты. Подтверждено, что решение не вводит несанкционированных технологий.',
            },
            {
              title: 'Информация запротоколирована и распространена',
              desc: 'Протокол встречи оформлен и разослан заинтересованным. ADR сохранён в хранилище с датой, статусом и ссылками. Нумерация обновлена, ссылка добавлена в индекс.',
            },
            {
              title: 'Задача в таск-трекере закрыта',
              desc: 'Задача на доске комитета переведена в финальный статус. Все связанные тикеты (дочерние задачи, тикеты разработки) обновлены.',
            },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-bold text-emerald-700">{idx + 1}</span>
              </div>
              <div className="flex-1 bg-slate-50 rounded-lg px-4 py-3 border border-slate-100">
                <p className="text-sm font-semibold text-slate-900 mb-1">{item.title}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Kanban / Статусная модель */}
      <h3 id="architecture-kanban" className="text-lg font-semibold text-slate-900 mt-10 mb-4 scroll-mt-20 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
        Статусная модель канбан-доски
      </h3>

      <Card className="p-6">
        <p className="text-sm text-slate-600 mb-5 leading-relaxed">
          Архитектурный комитет использует отдельную канбан-доску. Задача проходит полный цикл от создания до закрытия.
        </p>

        <div className="flex flex-wrap items-center gap-2 mb-6">
          {kanbanStatuses.map((status, idx) => (
            <div key={status.label} className="flex items-center gap-2">
              <span className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold ${status.color}`}>
                {status.label}
              </span>
              {idx < kanbanStatuses.length - 1 && <ArrowRight className="w-3.5 h-3.5 text-slate-300" />}
            </div>
          ))}
        </div>

        <div className="bg-slate-50 rounded-lg p-5 border border-slate-100 mb-5">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Пример: рассмотрение архитектурного документа</p>
          <div className="space-y-2 text-sm text-slate-700 leading-relaxed">
            <div className="flex items-start gap-2">
              <span className="mt-0.5 text-slate-400">1.</span>
              <span>Задача создаётся как <span className="font-semibold">Новая</span>.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-0.5 text-slate-400">2.</span>
              <span>После выполнения DoR переводится в <span className="font-semibold">Готова к рассмотрению</span>.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-0.5 text-slate-400">3.</span>
              <span>Когда назначено заседание — <span className="font-semibold">На рассмотрении</span>.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-0.5 text-slate-400">4.</span>
              <span>Если нужны правки — <span className="font-semibold">На доработке</span>, после исправлений возвращается в <span className="font-semibold">Готова к рассмотрению</span>.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-0.5 text-slate-400">5.</span>
              <span>Если одобрено — <span className="font-semibold">Утверждено</span>. Если отклонено — <span className="font-semibold">Отклонено</span>.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-0.5 text-slate-400">6.</span>
              <span>После оформления протокола и ADR — <span className="font-semibold">Закрыто</span>.</span>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          <div className="bg-primary-50 rounded-lg p-4 border border-primary-100">
            <div className="flex items-start gap-2">
              <Lightbulb className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-primary-700 leading-relaxed">
                Запросы на консультацию проходят по упрощённому workflow — без этапа «На доработке».
              </p>
            </div>
          </div>
          <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-amber-700 leading-relaxed">
                Задачи комитета связаны с задачами разработки: ADR ссылается на user story, архитектура — на эпики реализации.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
