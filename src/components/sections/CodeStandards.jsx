import {
  FileCode,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  GitPullRequest,
  MessageSquare,
  BookOpen,
  Zap,
  Code2,
} from 'lucide-react';

function Card({ children, className = '' }) {
  return <div className={`rounded-xl border border-slate-200 bg-white shadow-sm ${className}`}>{children}</div>;
}

export default function CodeStandards() {
  return (
    <section>
      <div id="code-standards-overview" className="mb-8 scroll-mt-20">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-primary-50">
            <FileCode className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Стандарты кода</h2>
        </div>
        <p className="text-slate-600 leading-relaxed ml-[52px]">
          Единые стандарты кодирования — основа масштабируемой команды. Они ускоряют ревью,
          снижают когнитивную нагрузку и обеспечивают консистентность кодовой базы.
        </p>
      </div>

      <h3 id="code-standards-cursor" className="text-lg font-semibold text-slate-900 mt-10 mb-4 scroll-mt-20 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
        Cursor и Vibecoding
      </h3>

      <Card>
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                В Click мы используем Cursor как основную IDE с AI-ассистентом. «Vibecoding» — наш подход
                к работе с AI: мы задаём контекст через правила проекта, используем .cursorrules для
                консистентности и всегда ревьюим AI-сгенерированный код.
              </p>
              <div className="space-y-2">
                {[
                  'Настройте .cursorrules в корне каждого проекта',
                  'Используйте AI для scaffolding, но всегда ревьюте результат',
                  'Не коммитьте код, который вы не понимаете полностью',
                  'AI-тесты — хороший старт, но проверьте edge-cases вручную',
                  'Используйте @-упоминания файлов для точного контекста',
                ].map((rule) => (
                  <div key={rule} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700">{rule}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 rounded-lg p-5 border border-slate-100">
              <div className="flex items-center gap-2 mb-3">
                <Code2 className="w-4 h-4 text-slate-500" />
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Пример .cursorrules</p>
              </div>
              <div className="bg-slate-900 rounded-lg p-4 text-sm font-mono text-slate-300 leading-relaxed overflow-x-auto">
                <pre>{`# Click Project Rules
- Use TypeScript strict mode
- Follow REST naming conventions
- All API responses: { data, error, meta }
- Components: PascalCase
- Hooks: use* prefix
- Tests: *.test.ts alongside source
- No console.log in production code`}</pre>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <h3 id="code-standards-pr" className="text-lg font-semibold text-slate-900 mt-10 mb-4 scroll-mt-20 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
        Процесс PR-ревью
      </h3>

      <Card>
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                { icon: GitPullRequest, title: 'Размер PR', desc: 'Не более 400 строк изменений. Большие PR разбивайте на серию маленьких. Маленькие PR = быстрое ревью = быстрый мерж.' },
                { icon: MessageSquare, title: 'Описание', desc: 'Каждый PR содержит: что изменилось, зачем, как тестировать, скриншоты (для UI). Используйте шаблон PR.' },
                { icon: BookOpen, title: 'Ревьюеры', desc: 'Минимум 1 апрув обязателен. Для критических сервисов — 2 апрува. Автор не может апрувить свой PR.' },
                { icon: Zap, title: 'CI-проверки', desc: 'Все CI-проверки должны быть зелёными: линтинг, тесты, сборка, security-сканирование.' },
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
            <div className="space-y-4">
              <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
                <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-2">Чек-лист для автора PR</p>
                <div className="space-y-1.5">
                  {[
                    'Self-review проведён',
                    'Тесты добавлены / обновлены',
                    'Нет console.log / debugger',
                    'Описание заполнено по шаблону',
                    'Jira-тикет привязан',
                    'Скриншоты (для UI-изменений)',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded border-2 border-emerald-300 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      </div>
                      <span className="text-sm text-emerald-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-amber-800">Анти-паттерны</p>
                    <ul className="mt-1.5 space-y-1 text-sm text-amber-700">
                      <li>PR открыт более 3 дней без ревью — эскалируйте</li>
                      <li>«LGTM» без вдумчивого просмотра кода</li>
                      <li>Мердж с неразрешёнными комментариями</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <h3 id="code-standards-docs" className="text-lg font-semibold text-slate-900 mt-10 mb-4 scroll-mt-20 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
        Техническая документация
      </h3>

      <Card className="p-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Документация — такой же deliverable, как и код. Каждый сервис, API и архитектурное решение
              должны быть задокументированы и актуальны.
            </p>
            <div className="space-y-2">
              {[
                'README.md в корне каждого сервиса (запуск, конфигурация, архитектура)',
                'ADR (Architecture Decision Record) для каждого значимого решения',
                'API-документация через OpenAPI / Swagger',
                'Runbook для каждого production-сервиса',
                'Обновляйте документацию в том же PR, где меняете код',
              ].map((rule) => (
                <div key={rule} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-700">{rule}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-primary-50 rounded-lg p-4 border border-primary-100">
            <div className="flex items-start gap-2">
              <Lightbulb className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-primary-800 mb-1">Правило двух недель</p>
                <p className="text-sm text-primary-700 leading-relaxed">
                  Если документация не обновлялась более 2 недель после изменения кода — она считается
                  устаревшей. Добавьте обновление документации в Definition of Done.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
