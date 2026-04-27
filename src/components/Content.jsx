import { useState } from 'react';
import {
  BookOpen,
  Calculator,
  BarChart3,
  Users,
  Wrench,
  Target,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Clock,
  Timer,
  Percent,
  AlertTriangle,
  Lightbulb,
  ChevronDown,
  ChevronUp,
  LayoutGrid,
  GitBranch,
  Filter,
  FileText,
  Link2,
  Calendar,
  MessageSquare,
  Eye,
  RotateCcw,
  ClipboardCheck,
  CircleDot,
  Zap,
} from 'lucide-react';

/* ─────────────────── Общие UI-примитивы ─────────────────── */

function SectionHeader({ icon: Icon, title, subtitle, id }) {
  return (
    <div id={id} className="mb-8 scroll-mt-20">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 rounded-lg bg-primary-50">
          <Icon className="w-5 h-5 text-primary-600" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
      </div>
      {subtitle && <p className="text-slate-600 leading-relaxed ml-[52px]">{subtitle}</p>}
    </div>
  );
}

function SubHeader({ id, title }) {
  return (
    <h3 id={id} className="text-lg font-semibold text-slate-900 mt-10 mb-4 scroll-mt-20 flex items-center gap-2">
      <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
      {title}
    </h3>
  );
}

function Card({ children, className = '' }) {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white shadow-sm ${className}`}>
      {children}
    </div>
  );
}

function Badge({ children, variant = 'default' }) {
  const styles = {
    default: 'bg-slate-100 text-slate-700',
    primary: 'bg-primary-50 text-primary-700',
    success: 'bg-emerald-50 text-emerald-700',
    warning: 'bg-amber-50 text-amber-700',
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[variant]}`}>
      {children}
    </span>
  );
}

/* ─────────────────── 1. ФРЕЙМВОРКИ ─────────────────── */

function FrameworksSection() {
  const [activeTab, setActiveTab] = useState('scrum');

  return (
    <section>
      <SectionHeader
        icon={BookOpen}
        title="Фреймворки"
        subtitle="Agile — это не единая методология, а образ мышления, подкреплённый фреймворками. Выбирайте подходящий в зависимости от контекста команды, каденции и типа продукта."
        id="frameworks-overview"
      />

      <div className="flex gap-2 mb-6">
        {['scrum', 'kanban'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === tab
                ? 'bg-primary-600 text-white shadow-md shadow-primary-600/20'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {tab === 'scrum' ? 'Scrum' : 'Kanban'}
          </button>
        ))}
      </div>

      {activeTab === 'scrum' && (
        <div className="space-y-6">
          <Card>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 id="frameworks-scrum" className="font-semibold text-slate-900 mb-3 scroll-mt-20">Что такое Scrum?</h4>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Scrum — это итеративный фреймворк, построенный вокруг спринтов фиксированной длины (обычно 2 недели).
                    Он определяет три роли (Product Owner, Scrum Master, разработчики), пять событий
                    (спринт, планирование, дейли-стендап, обзор, ретроспектива) и три артефакта (Product
                    Backlog, Sprint Backlog, инкремент).
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Scrum лучше всего подходит командам, которым нужна предсказуемая каденция поставки, чёткая
                    ответственность и структурированный ритм инспекции и адаптации. Идеален для разработки
                    продуктов, где scope меняется на основе обратной связи от стейкхолдеров.
                  </p>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Лучше всего для</p>
                    {['Кросс-функциональных продуктовых команд', 'Сложных доменов с меняющимися требованиями', 'Организаций, которым нужна предсказуемость поставки'].map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-50 rounded-lg p-5 border border-slate-100">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Scrum: обзор</p>
                  <div className="space-y-4">
                    {[
                      { label: 'Длина спринта', value: '1–4 недели (рекомендуется 2 недели)' },
                      { label: 'Роли', value: 'Product Owner, Scrum Master, разработчики' },
                      { label: 'Артефакты', value: 'Product Backlog, Sprint Backlog, инкремент' },
                      { label: 'События', value: 'Планирование, стендап, обзор, ретро' },
                      { label: 'Ключевая метрика', value: 'Velocity (story points / спринт)' },
                    ].map((row) => (
                      <div key={row.label}>
                        <p className="text-xs font-medium text-slate-500">{row.label}</p>
                        <p className="text-sm text-slate-800 font-medium">{row.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}

      {activeTab === 'kanban' && (
        <div className="space-y-6">
          <Card>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 id="frameworks-kanban" className="font-semibold text-slate-900 mb-3 scroll-mt-20">Что такое Kanban?</h4>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Kanban — это метод управления потоком, который визуализирует работу, ограничивает незавершённую
                    работу (WIP) и оптимизирует поток создания ценности. В отличие от Scrum, он не предписывает
                    фиксированных итераций или конкретных ролей — он накладывается на ваш текущий процесс и помогает
                    улучшать его постепенно.
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Kanban отлично работает в средах с непрерывным потоком задач, непредсказуемым входящим потоком
                    (поддержка, обслуживание) или когда команды хотят оптимизировать доставку без привязки к
                    таймбоксированным спринтам.
                  </p>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Лучше всего для</p>
                    {['Команд поддержки и эксплуатации', 'Непрерывной доставки / DevOps-пайплайнов', 'Команд, желающих улучшаться без смены структуры'].map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-50 rounded-lg p-5 border border-slate-100">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Kanban: обзор</p>
                  <div className="space-y-4">
                    {[
                      { label: 'Каденция', value: 'Непрерывный поток (без фиксированных спринтов)' },
                      { label: 'Роли', value: 'Нет предписанных ролей — используйте текущую структуру' },
                      { label: 'Артефакты', value: 'Kanban-доска, WIP-лимиты, политики' },
                      { label: 'Практики', value: 'Визуализация, ограничение WIP, управление потоком' },
                      { label: 'Ключевая метрика', value: 'Cycle Time и пропускная способность' },
                    ].map((row) => (
                      <div key={row.label}>
                        <p className="text-xs font-medium text-slate-500">{row.label}</p>
                        <p className="text-sm text-slate-800 font-medium">{row.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}

      <SubHeader id="frameworks-comparison" title="Когда что применять?" />
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="text-left px-5 py-3 font-semibold text-slate-700">Фактор</th>
                <th className="text-left px-5 py-3 font-semibold text-slate-700">Scrum</th>
                <th className="text-left px-5 py-3 font-semibold text-slate-700">Kanban</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                ['Характер работы', 'Проектная, новые фичи', 'Непрерывная, обслуживание, поддержка'],
                ['Каденция планирования', 'Фиксированные спринты (1–4 недели)', 'Непрерывная, по запросу'],
                ['Роли', 'PO, SM, разработчики', 'Нет предписанных ролей'],
                ['Гибкость изменений', 'Изменения ждут следующего спринта', 'Задачи можно добавлять в любое время'],
                ['Метрики', 'Velocity, Burndown', 'Cycle Time, пропускная способность, WIP'],
                ['Лучше всего для', 'Предсказуемых циклов поставки', 'Быстрого потока операционной работы'],
              ].map(([factor, scrum, kanban]) => (
                <tr key={factor} className="hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-3 font-medium text-slate-800">{factor}</td>
                  <td className="px-5 py-3 text-slate-600">{scrum}</td>
                  <td className="px-5 py-3 text-slate-600">{kanban}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </section>
  );
}

/* ─────────────────── 2. ОЦЕНКА ─────────────────── */

function EstimationSection() {
  const fibonacci = [
    { value: '1', label: 'XS', desc: 'Тривиальное изменение — правка конфига, текста или однострочник.' },
    { value: '2', label: 'S', desc: 'Небольшая, понятная задача. Минимальный риск, ясный путь.' },
    { value: '3', label: 'M', desc: 'Умеренная сложность. Может затронуть 2–3 файла или потребовать исследования.' },
    { value: '5', label: 'L', desc: 'Значительные усилия. Несколько компонентов, точки интеграции.' },
    { value: '8', label: 'XL', desc: 'Большая и сложная задача. Скорее всего, нужно разбить на части.' },
    { value: '13', label: 'XXL', desc: 'Уровень эпика. Высокая неопределённость — декомпозируйте перед коммитом.' },
  ];

  return (
    <section>
      <SectionHeader
        icon={Calculator}
        title="Оценка"
        subtitle="Оценка — это не про точность, а про общее понимание. Команды согласовывают относительную сложность, чтобы прогнозировать ёмкость и выявлять скрытые риски."
        id="estimation-overview"
      />

      <SubHeader id="estimation-comparison" title="Story Points vs. размеры футболок" />
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="text-left px-5 py-3 font-semibold text-slate-700">Параметр</th>
                <th className="text-left px-5 py-3 font-semibold text-slate-700">
                  <Badge variant="primary">Story Points</Badge>
                </th>
                <th className="text-left px-5 py-3 font-semibold text-slate-700">
                  <Badge variant="success">Размеры футболок</Badge>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                ['Назначение', 'Оценка сложности на уровне спринта', 'Высокоуровневое планирование релизов и роадмапа'],
                ['Шкала', 'Фибоначчи (1, 2, 3, 5, 8, 13, 21)', 'XS, S, M, L, XL, XXL'],
                ['Точность', 'Относительная и числовая — позволяет отслеживать velocity', 'Относительная и категориальная — быстрая, без лишних трений'],
                ['Где применяется', 'Планирование спринта, уточнение', 'Роадмап продукта, PI Planning, Discovery'],
                ['Привязка', 'Якорь — эталонная история на «3»', 'Якорь — эталонный эпик на «M»'],
                ['Анти-паттерн', 'Приравнивание поинтов к часам', 'Пропуск декомпозиции для задач «L+»'],
              ].map(([dim, points, tshirt]) => (
                <tr key={dim} className="hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-3 font-medium text-slate-800">{dim}</td>
                  <td className="px-5 py-3 text-slate-600">{points}</td>
                  <td className="px-5 py-3 text-slate-600">{tshirt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <SubHeader id="estimation-fibonacci" title="Шкала Фибоначчи" />
      <p className="text-sm text-slate-600 mb-4 leading-relaxed">
        Последовательность Фибоначчи (1, 2, 3, 5, 8, 13, 21) отражает то, что неопределённость растёт с размером.
        Увеличивающиеся промежутки между числами заставляют команды группировать задачи по «корзинам», а не спорить
        о мелочах, что делает оценку быстрее и честнее.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {fibonacci.map((item) => (
          <Card key={item.value} className="p-4 hover:border-primary-200 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center">
                <span className="text-lg font-bold text-primary-700">{item.value}</span>
              </div>
              <div>
                <Badge variant="primary">{item.label}</Badge>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
          </Card>
        ))}
      </div>

      <SubHeader id="estimation-tshirt" title="Правила размеров футболок" />
      <Card>
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              {[
                { size: 'XS', color: 'bg-emerald-100 text-emerald-700', rule: 'Менее 1 дня работы. Нет неизвестных.' },
                { size: 'S', color: 'bg-emerald-50 text-emerald-700', rule: '1–2 дня. Чёткие критерии приёмки.' },
                { size: 'M', color: 'bg-amber-50 text-amber-700', rule: '3–5 дней. Требуется проработка дизайна.' },
                { size: 'L', color: 'bg-amber-100 text-amber-700', rule: '1–2 недели. Несколько подзадач, стоит разбить.' },
                { size: 'XL', color: 'bg-red-50 text-red-700', rule: '2–4 недели. Высокий риск — необходима декомпозиция.' },
                { size: 'XXL', color: 'bg-red-100 text-red-700', rule: 'Уровень эпика. Сначала разбейте на несколько историй.' },
              ].map((item) => (
                <div key={item.size} className="flex items-center gap-3">
                  <span className={`inline-flex items-center justify-center w-12 h-7 rounded-md text-xs font-bold ${item.color}`}>
                    {item.size}
                  </span>
                  <span className="text-sm text-slate-700">{item.rule}</span>
                </div>
              ))}
            </div>
            <div className="bg-amber-50 rounded-lg p-5 border border-amber-100">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-amber-800 text-sm mb-2">Анти-паттерны оценки</p>
                  <ul className="space-y-2 text-sm text-amber-700">
                    <li className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-amber-500 flex-shrink-0" />Приравнивание story points к часам или дням</li>
                    <li className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-amber-500 flex-shrink-0" />Оценка одним человеком вместо всей команды</li>
                    <li className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-amber-500 flex-shrink-0" />Пропуск оценки для «очевидных» историй</li>
                    <li className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-amber-500 flex-shrink-0" />Отсутствие переоценки после изменения scope</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}

/* ─────────────────── 3. МЕТРИКИ ─────────────────── */

function MetricsSection() {
  const metrics = [
    {
      id: 'metrics-velocity',
      title: 'Velocity',
      icon: TrendingUp,
      color: 'text-blue-600 bg-blue-50',
      value: '34 pts',
      label: 'средн. / спринт',
      desc: 'Среднее количество story points, доставленных за спринт за последние 3–5 спринтов. Используйте для планирования ёмкости — не для оценки производительности людей.',
      tips: [
        'Отслеживайте скользящее среднее за 3 спринта для надёжности',
        'Никогда не сравнивайте velocity разных команд',
        'Используйте для прогноза «сколько спринтов до релиза?»',
      ],
    },
    {
      id: 'metrics-cycle-time',
      title: 'Cycle Time',
      icon: Clock,
      color: 'text-violet-600 bg-violet-50',
      value: '2.3 дня',
      label: 'средн. на задачу',
      desc: 'Время от начала активной работы над задачей («В работе») до её завершения («Готово»). Показатель эффективности потока команды.',
      tips: [
        'Чем меньше — тем лучше: это означает более быструю пропускную способность',
        'Всплески указывают на блокеры или переключение контекста',
        'Отслеживайте 85-й перцентиль, а не только среднее',
      ],
    },
    {
      id: 'metrics-lead-time',
      title: 'Lead Time',
      icon: Timer,
      color: 'text-emerald-600 bg-emerald-50',
      value: '8.1 дней',
      label: 'средн. на задачу',
      desc: 'Общее время от момента попадания запроса в бэклог до его доставки клиенту. Измеряет отзывчивость от начала до конца.',
      tips: [
        'Включает время ожидания — не только активную работу',
        'Сокращение lead time часто требует ухода за бэклогом',
        'Полезный входной параметр SLA для коммуникации со стейкхолдерами',
      ],
    },
    {
      id: 'metrics-say-do',
      title: 'Say/Do Ratio',
      icon: Percent,
      color: 'text-amber-600 bg-amber-50',
      value: '87%',
      label: 'посл. спринт',
      desc: 'Процент выполненных обязательств спринта. Если команда взяла 10 историй и доставила 9, Say/Do Ratio = 90%. Измеряет точность планирования.',
      tips: [
        'Целевой показатель > 80% для стабильного доверия',
        'Ниже 70% — сигнал чрезмерных обязательств или расползания scope',
        'Сочетайте с velocity для калибровки планирования спринта',
      ],
    },
  ];

  return (
    <section>
      <SectionHeader
        icon={BarChart3}
        title="Метрики"
        subtitle="Измеряйте то, что важно. Agile-метрики помогают командам инспектировать процесс — а не оценивать людей. Используйте их для диалога, а не для наказания."
        id="metrics-overview"
      />

      <div className="grid sm:grid-cols-2 gap-4">
        {metrics.map((m) => {
          const Icon = m.icon;
          return (
            <Card key={m.id} className="p-5 hover:shadow-md transition-shadow">
              <div id={m.id} className="scroll-mt-20">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${m.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-semibold text-slate-900">{m.title}</h4>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-slate-900">{m.value}</p>
                    <p className="text-[11px] text-slate-500">{m.label}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{m.desc}</p>
                <div className="space-y-1.5">
                  {m.tips.map((tip) => (
                    <div key={tip} className="flex items-start gap-2">
                      <Lightbulb className="w-3.5 h-3.5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-slate-600">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

/* ─────────────────── 4. ЦЕРЕМОНИИ ─────────────────── */

function CeremoniesSection() {
  const [expandedCeremony, setExpandedCeremony] = useState(null);

  const timeline = [
    { day: 'День 1', event: 'Планирование спринта', icon: Calendar, duration: '2–4 ч', color: 'bg-blue-500' },
    { day: 'Ежедневно', event: 'Стендап', icon: MessageSquare, duration: '15 мин', color: 'bg-emerald-500' },
    { day: 'Середина спринта', event: 'Уточнение (PBR)', icon: ClipboardCheck, duration: '1–2 ч', color: 'bg-violet-500' },
    { day: 'Последний день', event: 'Обзор спринта', icon: Eye, duration: '1–2 ч', color: 'bg-amber-500' },
    { day: 'Последний день', event: 'Ретроспектива', icon: RotateCcw, duration: '1–1.5 ч', color: 'bg-rose-500' },
  ];

  const ceremonies = [
    {
      id: 'ceremonies-planning',
      title: 'Планирование спринта',
      icon: Calendar,
      color: 'text-blue-600 bg-blue-50',
      who: 'Вся Scrum-команда',
      timebox: '2–4 часа для 2-недельного спринта',
      purpose: 'Определить цель спринта и выбрать элементы Product Backlog, которые команда разработки прогнозирует доставить. Команда совместно создаёт план выполнения работы.',
      inputs: ['Уточнённый и оценённый Product Backlog', 'Ёмкость команды и velocity', 'Приоритеты Product Owner'],
      outputs: ['Цель спринта', 'Sprint Backlog (выбранные элементы + план)', 'Обязательство команды'],
    },
    {
      id: 'ceremonies-standup',
      title: 'Дейли-стендап',
      icon: MessageSquare,
      color: 'text-emerald-600 bg-emerald-50',
      who: 'Команда разработки (PO и SM — опционально)',
      timebox: 'Максимум 15 минут',
      purpose: 'Синхронизировать команду, выявить блокеры и перепланировать день. Это не отчёт о статусе — это координационное событие, принадлежащее разработчикам.',
      inputs: ['Sprint-доска (текущее состояние)', 'Прогресс за вчера'],
      outputs: ['Обновлённый план на день', 'Выявленные препятствия', 'Потребности в совместной работе'],
    },
    {
      id: 'ceremonies-refinement',
      title: 'Уточнение (PBR)',
      icon: ClipboardCheck,
      color: 'text-violet-600 bg-violet-50',
      who: 'Product Owner + команда разработки',
      timebox: '1–2 часа в неделю (постоянно)',
      purpose: 'Декомпозировать, уточнить и оценить предстоящие элементы Product Backlog, чтобы они соответствовали Definition of Ready до попадания в планирование спринта.',
      inputs: ['Элементы Product Backlog на 2–3 спринта вперёд', 'Черновики критериев приёмки', 'Технический контекст'],
      outputs: ['Уточнённые истории с критериями приёмки', 'Оценки (story points)', 'Выявленные зависимости'],
    },
    {
      id: 'ceremonies-review',
      title: 'Обзор спринта',
      icon: Eye,
      color: 'text-amber-600 bg-amber-50',
      who: 'Scrum-команда + стейкхолдеры',
      timebox: '1–2 часа для 2-недельного спринта',
      purpose: 'Продемонстрировать рабочий инкремент стейкхолдерам и собрать обратную связь. Это событие инспекции и адаптации продукта — а не этап согласования.',
      inputs: ['Завершённый инкремент (соответствует DoD)', 'Итоги по цели спринта', 'Доступность стейкхолдеров'],
      outputs: ['Обратная связь от стейкхолдеров', 'Обновлённый Product Backlog', 'Уточнённый прогноз релиза'],
    },
    {
      id: 'ceremonies-retro',
      title: 'Ретроспектива',
      icon: RotateCcw,
      color: 'text-rose-600 bg-rose-50',
      who: 'Scrum-команда (без внешних стейкхолдеров)',
      timebox: '1–1.5 часа для 2-недельного спринта',
      purpose: 'Инспектировать процесс работы команды, взаимодействие и инструменты. Определить, что прошло хорошо, что нет, и взять на себя конкретные, действенные улучшения на следующий спринт.',
      inputs: ['Метрики спринта (velocity, cycle time)', 'Наблюдения и впечатления команды', 'Экшн-айтемы с прошлой ретро'],
      outputs: ['1–3 экшн-айтема по улучшению', 'Назначение ответственных за каждый', 'Обновлённые рабочие соглашения команды'],
    },
  ];

  const dor = [
    'Ясная, лаконичная пользовательская история с критериями приёмки',
    'Зависимости выявлены и устранены (или есть план)',
    'Оценена командой разработки',
    'UX-дизайны (если применимо) рассмотрены и утверждены',
    'Технический подход обсуждён и понятен',
    'История достаточно мала, чтобы завершить за один спринт',
  ];

  const dod = [
    'Код написан и прошёл код-ревью (PR влит)',
    'Unit-тесты написаны и проходят (покрытие \u2265 80%)',
    'Интеграционные тесты проходят в CI/CD-пайплайне',
    'Критерии приёмки проверены QA / PO',
    'Нет открытых критических или высокоприоритетных дефектов',
    'Документация обновлена (если применимо)',
    'Успешно развёрнуто в staging-среде',
    'Product Owner принимает инкремент',
  ];

  const toggleCeremony = (id) => setExpandedCeremony(expandedCeremony === id ? null : id);

  return (
    <section>
      <SectionHeader
        icon={Users}
        title="Церемонии"
        subtitle="Scrum-церемонии (события) создают ритм инспекции и адаптации. У каждого события есть чёткая цель, таймбокс и ожидаемые результаты."
        id="ceremonies-overview"
      />

      <SubHeader id="ceremonies-timeline" title="Таймлайн церемоний" />
      <Card className="p-6 mb-8">
        <div className="relative">
          <div className="absolute left-[18px] top-4 bottom-4 w-0.5 bg-slate-200" />
          <div className="space-y-6">
            {timeline.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-center gap-4 relative">
                  <div className={`w-9 h-9 rounded-full ${item.color} flex items-center justify-center flex-shrink-0 z-10`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1 flex items-center justify-between bg-slate-50 rounded-lg px-4 py-3 border border-slate-100">
                    <div>
                      <p className="text-sm font-medium text-slate-900">{item.event}</p>
                      <p className="text-xs text-slate-500">{item.day}</p>
                    </div>
                    <Badge>{item.duration}</Badge>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Card>

      <div className="space-y-3">
        {ceremonies.map((c) => {
          const Icon = c.icon;
          const isOpen = expandedCeremony === c.id;
          return (
            <Card key={c.id} className="overflow-hidden">
              <button
                id={c.id}
                onClick={() => toggleCeremony(c.id)}
                className="w-full flex items-center justify-between px-5 py-4 text-left scroll-mt-20 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${c.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">{c.title}</h4>
                    <p className="text-xs text-slate-500">{c.timebox}</p>
                  </div>
                </div>
                {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
              </button>
              {isOpen && (
                <div className="px-5 pb-5 border-t border-slate-100 pt-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-slate-600 leading-relaxed mb-4">{c.purpose}</p>
                      <p className="text-xs font-medium text-slate-500 mb-1">Кто участвует</p>
                      <p className="text-sm text-slate-700 mb-3">{c.who}</p>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Входы</p>
                        {c.inputs.map((input) => (
                          <div key={input} className="flex items-start gap-2 mb-1">
                            <ArrowRight className="w-3 h-3 text-primary-500 mt-1 flex-shrink-0" />
                            <span className="text-xs text-slate-600">{input}</span>
                          </div>
                        ))}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Выходы</p>
                        {c.outputs.map((output) => (
                          <div key={output} className="flex items-start gap-2 mb-1">
                            <CheckCircle2 className="w-3 h-3 text-emerald-500 mt-1 flex-shrink-0" />
                            <span className="text-xs text-slate-600">{output}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          );
        })}
      </div>

      <SubHeader id="ceremonies-dor-dod" title="Definition of Ready и Definition of Done" />
      <div className="grid md:grid-cols-2 gap-4">
        <Card className="p-5">
          <div className="flex items-center gap-2 mb-4">
            <CircleDot className="w-5 h-5 text-primary-600" />
            <h4 className="font-semibold text-slate-900">Definition of Ready (DoR)</h4>
          </div>
          <p className="text-xs text-slate-500 mb-3">История готова к планированию спринта, когда:</p>
          <ul className="space-y-2">
            {dor.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded border-2 border-slate-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-slate-400" />
                </div>
                <span className="text-sm text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </Card>
        <Card className="p-5">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-emerald-600" />
            <h4 className="font-semibold text-slate-900">Definition of Done (DoD)</h4>
          </div>
          <p className="text-xs text-slate-500 mb-3">Инкремент считается «готовым», когда:</p>
          <ul className="space-y-2">
            {dod.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded border-2 border-emerald-300 bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                </div>
                <span className="text-sm text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}

/* ─────────────────── 5. ИНСТРУМЕНТЫ ─────────────────── */

function ToolsSection() {
  const jqlFilters = [
    { name: 'Мои открытые', query: 'assignee = currentUser() AND resolution = Unresolved ORDER BY priority DESC' },
    { name: 'Burndown спринта', query: 'sprint in openSprints() AND status != Done' },
    { name: 'Устаревшие', query: 'updated <= -14d AND status != Done AND status != Closed' },
    { name: 'Заблокированные', query: 'status = "Blocked" AND sprint in openSprints()' },
    { name: 'Без оценки', query: 'sprint in openSprints() AND (story_points is EMPTY OR story_points = 0)' },
    { name: 'Недавно готовые', query: 'status changed to Done AFTER -7d ORDER BY updated DESC' },
  ];

  return (
    <section>
      <SectionHeader
        icon={Wrench}
        title="Инструменты"
        subtitle="Отличное Agile-исполнение требует отличной гигиены инструментов. Jira и Confluence хороши ровно настолько, насколько хороши привычки за ними."
        id="tools-overview"
      />

      <SubHeader id="tools-jira" title="Лучшие практики Jira" />
      <Card>
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                { icon: LayoutGrid, title: 'Гигиена доски', desc: 'Держите колонки лёгкими. Ограничивайте WIP на колонку. Архивируйте устаревшие задачи еженедельно. Убедитесь, что у каждой карточки есть ответственный и оценка.' },
                { icon: GitBranch, title: 'Синхронизация workflow', desc: 'Сопоставьте статусы Jira 1:1 с реальным процессом команды (To Do \u2192 In Progress \u2192 In Review \u2192 Done). Избегайте неиспользуемых статусов.' },
                { icon: Filter, title: 'Метки и компоненты', desc: 'Используйте единообразные метки (bug, tech-debt, spike) и компоненты Jira (frontend, backend, infra) для фильтрации и отчётности.' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-slate-100 flex-shrink-0">
                      <Icon className="w-4 h-4 text-slate-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">{item.title}</p>
                      <p className="text-xs text-slate-600 leading-relaxed mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="bg-primary-50 rounded-lg p-5 border border-primary-100">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-primary-800 text-sm mb-2">Золотые правила</p>
                  <ul className="space-y-2 text-sm text-primary-700">
                    <li className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-primary-500 flex-shrink-0" />Если этого нет в Jira — этого не было</li>
                    <li className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-primary-500 flex-shrink-0" />Обновляйте статус карточки до стендапа</li>
                    <li className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-primary-500 flex-shrink-0" />Одна история = один результат (не список задач)</li>
                    <li className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-primary-500 flex-shrink-0" />Привязывайте PR, дизайны и документы к тикету</li>
                    <li className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-primary-500 flex-shrink-0" />Никогда не переоткрывайте Done-задачу — создайте новую</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <SubHeader id="tools-jql" title="Основные JQL-фильтры" />
      <Card>
        <div className="divide-y divide-slate-100">
          {jqlFilters.map((filter) => (
            <div key={filter.name} className="px-5 py-3 flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="text-sm font-medium text-slate-800 sm:w-44 flex-shrink-0">{filter.name}</span>
              <code className="text-xs bg-slate-100 text-slate-700 px-3 py-1.5 rounded-md font-mono break-all flex-1">
                {filter.query}
              </code>
            </div>
          ))}
        </div>
      </Card>

      <SubHeader id="tools-confluence" title="Интеграция с Confluence" />
      <Card>
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Confluence — это долгосрочная память команды. Связывайте его тесно с Jira, чтобы решения, дизайны и
                контекст не оставались в сообщениях Slack или личных заметках.
              </p>
              <div className="space-y-3">
                {[
                  { icon: FileText, text: 'Создавайте страницу спринта для каждого спринта с целями, ёмкостью, рисками и итогами ретро' },
                  { icon: Link2, text: 'Связывайте страницы Confluence с эпиками и спринтами Jira через Jira-макрос' },
                  { icon: FileText, text: 'Ведите живую страницу «Командные соглашения» (DoR, DoD, рабочие часы, нормы коммуникации)' },
                  { icon: Link2, text: 'Прикрепляйте записи архитектурных решений (ADR) к соответствующим эпикам' },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-2.5">
                      <Icon className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-700">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="bg-slate-50 rounded-lg p-5 border border-slate-100">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Рекомендуемая структура Confluence-пространства</p>
              <div className="space-y-2 text-sm">
                {[
                  { indent: 0, text: '\uD83D\uDCC1 Пространство команды' },
                  { indent: 1, text: '\uD83D\uDCC4 Командные соглашения (DoR, DoD, нормы)' },
                  { indent: 1, text: '\uD83D\uDCC1 Спринты' },
                  { indent: 2, text: '\uD83D\uDCC4 Спринт 24 — 15–29 янв.' },
                  { indent: 2, text: '\uD83D\uDCC4 Спринт 25 — 29 янв.–12 фев.' },
                  { indent: 1, text: '\uD83D\uDCC1 Архитектурные решения (ADR)' },
                  { indent: 1, text: '\uD83D\uDCC1 Дизайн-документы' },
                  { indent: 1, text: '\uD83D\uDCC1 Архив ретроспектив' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center" style={{ paddingLeft: `${item.indent * 20}px` }}>
                    <span className="text-slate-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}

/* ─────────────────── 6. ЦЕЛИ СПРИНТА ─────────────────── */

function SprintGoalsSection() {
  const examples = [
    {
      bad: 'Завершить все истории в Sprint Backlog.',
      good: 'Дать пользователям возможность сбрасывать пароль по email, сократив обращения в поддержку по паролям на 40%.',
      why: 'Хорошая цель ориентирована на результат и измерима. Плохая цель просто описывает завершение задач.',
    },
    {
      bad: 'Работать над функцией поиска.',
      good: 'Доставить работающий поиск по ключевым словам в каталоге продуктов, чтобы бета-пользователи могли находить товары менее чем за 2 секунды.',
      why: 'Конкретика и целевой показатель производительности делают ясным момент достижения цели.',
    },
    {
      bad: 'Исправить баги и улучшить производительность.',
      good: 'Снизить p95 время ответа API на эндпоинте /orders с 1.8 с до менее 600 мс.',
      why: 'Количественные показатели заменяют расплывчатые формулировки об улучшении.',
    },
  ];

  const antiPatterns = [
    { pattern: 'Списки задач под видом целей', example: '«Завершить истории PROJ-101, PROJ-102, PROJ-103»' },
    { pattern: 'Расплывчатые стремления', example: '«Улучшить пользовательский опыт»' },
    { pattern: 'Выход вместо результата', example: '«Развернуть 5 микросервисов»' },
    { pattern: 'Нет критериев успеха', example: '«Работать над checkout-флоу» (как понять, что это готово?)' },
  ];

  return (
    <section>
      <SectionHeader
        icon={Target}
        title="Цели спринта"
        subtitle="Цель спринта — это единый ориентир спринта. Она обеспечивает фокус, согласованность и гибкость в выборе элементов бэклога."
        id="sprint-goals-overview"
      />

      <SubHeader id="sprint-goals-writing" title="Как писать измеримые, ориентированные на результат цели" />
      <Card>
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Отличная цель спринта отвечает на вопрос: <span className="font-semibold text-slate-800">«Почему этот спринт ценен?»</span> Она
                должна быть ориентирована на результат (что меняется для пользователя или бизнеса), измерима (как мы узнаем,
                что достигли её) и достаточно краткая, чтобы уместиться в одном предложении.
              </p>
              <div className="space-y-3">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Формула цели</p>
                <div className="bg-primary-50 rounded-lg p-4 border border-primary-100">
                  <p className="text-sm text-primary-800 font-medium italic">
                    «К концу этого спринта [кто] сможет [делать что], что приведёт к [измеримому результату].»
                  </p>
                </div>
                <div className="space-y-2 mt-4">
                  {[
                    'Фокусируйтесь на ОДНОЙ теме за спринт',
                    'Формулируйте цель в терминах бизнеса или пользователя',
                    'Включайте метрику успеха (хотя бы качественную)',
                    'Держите цель на виду на доске спринта',
                    'Проверяйте прогресс по цели на каждом стендапе',
                  ].map((tip) => (
                    <div key={tip} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-700">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-slate-50 rounded-lg p-5 border border-slate-100">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Чек-лист качества</p>
              <div className="space-y-3">
                {[
                  { q: 'Ориентирована на результат?', detail: 'Описывает, что меняется, а не что строится' },
                  { q: 'Измерима?', detail: 'Команда может объективно оценить «сделано / не сделано»' },
                  { q: 'Умещается в одном предложении?', detail: 'Достаточно краткая, чтобы каждый запомнил' },
                  { q: 'Достижима за один спринт?', detail: 'Реалистична с учётом ёмкости команды' },
                  { q: 'Даёт гибкость?', detail: 'Команда может выбрать КАК достичь цели' },
                ].map((item) => (
                  <div key={item.q} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded border-2 border-primary-300 bg-primary-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-800">{item.q}</p>
                      <p className="text-xs text-slate-500">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>

      <SubHeader id="sprint-goals-examples" title="Примеры: плохо vs. хорошо" />
      <div className="space-y-3">
        {examples.map((ex, idx) => (
          <Card key={idx} className="p-5">
            <div className="grid md:grid-cols-2 gap-4 mb-3">
              <div className="bg-red-50 rounded-lg p-3 border border-red-100">
                <p className="text-[11px] font-semibold text-red-500 uppercase tracking-wider mb-1">Избегайте</p>
                <p className="text-sm text-red-800 italic">«{ex.bad}»</p>
              </div>
              <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-100">
                <p className="text-[11px] font-semibold text-emerald-500 uppercase tracking-wider mb-1">Предпочтительно</p>
                <p className="text-sm text-emerald-800 italic">«{ex.good}»</p>
              </div>
            </div>
            <p className="text-xs text-slate-600"><span className="font-medium text-slate-700">Почему:</span> {ex.why}</p>
          </Card>
        ))}
      </div>

      <SubHeader id="sprint-goals-antipatterns" title="Анти-паттерны, которых стоит избегать" />
      <Card>
        <div className="divide-y divide-slate-100">
          {antiPatterns.map((ap) => (
            <div key={ap.pattern} className="px-5 py-4 flex flex-col sm:flex-row sm:items-start gap-2">
              <div className="flex items-center gap-2 sm:w-72 flex-shrink-0">
                <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-800">{ap.pattern}</span>
              </div>
              <p className="text-sm text-slate-500 italic">{ap.example}</p>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}

/* ─────────────────── ОСНОВНОЙ КОНТЕНТ ─────────────────── */

import StartHere from './sections/StartHere';
import Environments from './sections/Environments';
import CodeStandards from './sections/CodeStandards';
import Architecture from './sections/Architecture';
import ReleaseManagement from './sections/ReleaseManagement';
import Handoff from './sections/Handoff';
import Discovery from './sections/Discovery';

const agile = {
  frameworks: FrameworksSection,
  estimation: EstimationSection,
  metrics: MetricsSection,
  ceremonies: CeremoniesSection,
  tools: ToolsSection,
  'sprint-goals': SprintGoalsSection,
};

const passNavigate = {
  'start-here': StartHere,
};

const simple = {
  environments: Environments,
  'code-standards': CodeStandards,
  architecture: Architecture,
  'release-management': ReleaseManagement,
  handoff: Handoff,
  discovery: Discovery,
};

export default function Content({ activeSection, onNavigate }) {
  if (passNavigate[activeSection]) {
    const Section = passNavigate[activeSection];
    return (
      <div className="animate-fade-in">
        <Section onNavigate={onNavigate} />
      </div>
    );
  }

  const Section = agile[activeSection] || simple[activeSection];
  if (!Section) return null;
  return (
    <div className="animate-fade-in">
      <Section />
    </div>
  );
}
