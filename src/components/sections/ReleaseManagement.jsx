import {
  PackageCheck,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  GitBranch,
  Tag,
  Rocket,
  RotateCcw,
  Clock,
  Shield,
  Flag,
  Bug,
  ArrowRight,
  Users,
  FolderKanban,
  Info,
} from 'lucide-react';

function Card({ children, className = '' }) {
  return <div className={`rounded-xl border border-slate-200 bg-white shadow-sm ${className}`}>{children}</div>;
}

function Badge({ children, variant = 'default' }) {
  const s = { default: 'bg-slate-100 text-slate-700', primary: 'bg-primary-50 text-primary-700', success: 'bg-emerald-50 text-emerald-700', warning: 'bg-amber-50 text-amber-700' };
  return <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${s[variant]}`}>{children}</span>;
}

const releaseSteps = [
  { step: 'Code Freeze', icon: GitBranch, color: 'bg-blue-500', desc: 'Создание ветки release/* из develop. Только багфиксы разрешены.' },
  { step: 'QA на Staging', icon: Shield, color: 'bg-amber-500', desc: 'Полный регресс на Staging. UAT с Product Owner.' },
  { step: 'Тегирование', icon: Tag, color: 'bg-violet-500', desc: 'Создание Git-тега по semver. Обновление CHANGELOG.' },
  { step: 'Деплой в Prod', icon: Rocket, color: 'bg-emerald-500', desc: 'Blue-green деплой через CI/CD. Smoke-тесты после деплоя.' },
  { step: 'Мониторинг', icon: Clock, color: 'bg-rose-500', desc: '30-минутное окно наблюдения. Проверка алертов и метрик.' },
];

export default function ReleaseManagement() {
  return (
    <section>
      <div id="release-overview" className="mb-8 scroll-mt-20">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-primary-50">
            <PackageCheck className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Релиз-менеджмент</h2>
        </div>
        <p className="text-slate-600 leading-relaxed ml-[52px]">
          Предсказуемые и безопасные релизы — залог стабильности продукта. Каждый релиз
          проходит через стандартизированный процесс от code freeze до мониторинга в Production.
        </p>
      </div>

      <h3 id="release-process" className="text-lg font-semibold text-slate-900 mt-10 mb-4 scroll-mt-20 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
        Релизный процесс
      </h3>

      <Card className="p-6 mb-8">
        <div className="relative">
          <div className="absolute left-[18px] top-4 bottom-4 w-0.5 bg-slate-200" />
          <div className="space-y-5">
            {releaseSteps.map((item, idx) => {
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

      <h3 id="release-versioning" className="text-lg font-semibold text-slate-900 mt-10 mb-4 scroll-mt-20 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
        Версионирование (Semver)
      </h3>

      <Card>
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Все сервисы и API следуют Semantic Versioning (semver). Версия состоит из трёх частей:
                MAJOR.MINOR.PATCH.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-2 font-semibold text-slate-700">Тип</th>
                      <th className="text-left py-2 font-semibold text-slate-700">Когда</th>
                      <th className="text-left py-2 font-semibold text-slate-700">Пример</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="py-2"><Badge variant="warning">MAJOR</Badge></td>
                      <td className="py-2 text-slate-600">Breaking changes</td>
                      <td className="py-2 font-mono text-slate-700">2.0.0</td>
                    </tr>
                    <tr>
                      <td className="py-2"><Badge variant="primary">MINOR</Badge></td>
                      <td className="py-2 text-slate-600">Новая функциональность</td>
                      <td className="py-2 font-mono text-slate-700">1.3.0</td>
                    </tr>
                    <tr>
                      <td className="py-2"><Badge variant="success">PATCH</Badge></td>
                      <td className="py-2 text-slate-600">Багфиксы</td>
                      <td className="py-2 font-mono text-slate-700">1.2.5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Git-стратегия веток</p>
                <div className="space-y-2 text-sm text-slate-700">
                  <div className="flex items-center gap-2"><code className="text-xs bg-slate-200 px-1.5 py-0.5 rounded font-mono">main</code> — production-код</div>
                  <div className="flex items-center gap-2"><code className="text-xs bg-slate-200 px-1.5 py-0.5 rounded font-mono">develop</code> — интеграционная ветка</div>
                  <div className="flex items-center gap-2"><code className="text-xs bg-slate-200 px-1.5 py-0.5 rounded font-mono">feature/*</code> — ветки фич</div>
                  <div className="flex items-center gap-2"><code className="text-xs bg-slate-200 px-1.5 py-0.5 rounded font-mono">release/*</code> — ветки релизов</div>
                  <div className="flex items-center gap-2"><code className="text-xs bg-slate-200 px-1.5 py-0.5 rounded font-mono">hotfix/*</code> — срочные исправления</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <h3 id="release-rollback" className="text-lg font-semibold text-slate-900 mt-10 mb-4 scroll-mt-20 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
        Rollback-план
      </h3>

      <Card className="p-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Каждый релиз имеет документированный rollback-план. Если после деплоя обнаружены
              критические проблемы — откат происходит немедленно.
            </p>
            <div className="space-y-2">
              {[
                'Rollback возможен в течение 30 минут после деплоя',
                'Предыдущий образ (image) всегда доступен в container registry',
                'Миграции БД должны быть обратно-совместимы',
                'Feature flags используются для безопасного включения новой функциональности',
                'Post-mortem обязателен для каждого rollback',
              ].map((rule) => (
                <div key={rule} className="flex items-start gap-2">
                  <RotateCcw className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-700">{rule}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-amber-800 mb-2">Критерии немедленного rollback</p>
                <ul className="space-y-1.5 text-sm text-amber-700">
                  <li>Error rate более 5% в первые 15 минут</li>
                  <li>Латентность p95 выросла более чем на 50%</li>
                  <li>Критические бизнес-операции недоступны</li>
                  <li>Data corruption или потеря данных</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Инструкция по релизам в Мобильной платформе (Мобайл команды) */}
      <h3 id="release-jira" className="text-lg font-semibold text-slate-900 mt-10 mb-4 scroll-mt-20 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
        Инструкция по релизам в Мобильной платформе (Мобайл команды)
      </h3>

      <Card className="p-6 mb-8">
        <div className="space-y-6">
          <div className="bg-primary-50 rounded-lg p-4 border border-primary-100">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-primary-800 font-medium leading-relaxed">
                <span className="font-bold">Fix Version</span> ставим на ту Jira-сущность, которая реально идёт в релиз и к которой привязана рабочая ветка.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 space-y-5">
              <div>
                <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <FolderKanban className="w-4 h-4 text-violet-500" />
                  Правила Fix Version по типу сущности
                </h4>
                <div className="space-y-3">
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                    <p className="text-sm font-semibold text-slate-800 mb-1">Story</p>
                    <p className="text-sm text-slate-600">
                      Fix Version <span className="font-semibold text-rose-600">не ставим</span> на Story.
                      Если работа оформлена через Story, то Fix Version ставим только на <span className="font-semibold text-emerald-600">Sub-task</span>.
                    </p>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                    <p className="text-sm font-semibold text-slate-800 mb-1">Task</p>
                    <div className="space-y-2 text-sm text-slate-600">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>Если Sub-task просто делят работу одного разработчика на части, но разработка идёт в одной ветке — Fix Version ставим на <span className="font-semibold text-emerald-600">Task</span></span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>Если Sub-task — это отдельные части разработки (разные платформы, разные люди или разные ветки) — Fix Version ставим на <span className="font-semibold text-emerald-600">Sub-task</span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                <div className="flex items-start gap-2">
                  <GitBranch className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-amber-800">
                    <span className="font-semibold">Ключ ветки</span> в Git должен совпадать с той Jira-сущностью, на которой стоит Fix Version.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-72 flex-shrink-0">
              <div className="rounded-lg border border-slate-200 overflow-hidden shadow-sm">
                <div className="bg-slate-100 px-3 py-2 border-b border-slate-200">
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Пример Fix Version в Jira</p>
                </div>
                <img
                  src="/fix-version-example.png"
                  alt="Пример поля Fix Version в Jira — 8.44.0 iOS"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </Card>

      <h3 id="release-workflow" className="text-lg font-semibold text-slate-900 mt-10 mb-4 scroll-mt-20 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
        Workflow по Fix Version
      </h3>

      <Card className="p-6 mb-8">
        <p className="text-sm text-slate-600 mb-4">
          По сущностям, на которые присвоен Fix Version, workflow должен проходить через следующие этапы:
        </p>
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {['Test', 'Release Candidate', 'Regress', 'Ready for Prod'].map((status, idx, arr) => (
            <div key={status} className="flex items-center gap-2">
              <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-primary-50 text-primary-700 text-sm font-semibold border border-primary-100">
                {status}
              </span>
              {idx < arr.length - 1 && <ArrowRight className="w-4 h-4 text-slate-400" />}
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <div className="bg-rose-50 rounded-lg p-4 border border-rose-100">
            <div className="flex items-start gap-3">
              <Flag className="w-5 h-5 text-rose-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-rose-800 mb-2">Если найден дефект при тестировании или регрессе</p>
                <div className="space-y-2 text-sm text-rose-700">
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5">1.</span>
                    <span>Ставится <span className="font-semibold">красный флаг</span> на задачу</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5">2.</span>
                    <div className="flex items-center gap-1.5">
                      <span>Создаётся</span>
                      <Bug className="w-4 h-4 text-rose-600" />
                      <span className="font-semibold">Sub-bug</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5">3.</span>
                    <span>После исправления Sub-bug красный флаг снимается</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
            <p className="text-sm font-semibold text-slate-800 mb-2">Куда переводить задачу после исправления дефекта:</p>
            <div className="space-y-2 text-sm text-slate-700">
              <div className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>Если дефект найден <span className="font-semibold">во время тестирования</span> — задача переводится в статус <Badge variant="primary">Release Candidate</Badge></span>
              </div>
              <div className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>Если дефект найден <span className="font-semibold">в регрессе</span> — задача переводится в статус <Badge variant="success">Ready for Prod</Badge></span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <h3 id="release-fix-version-management" className="text-lg font-semibold text-slate-900 mt-10 mb-4 scroll-mt-20 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
        Управление Fix Version и Releases
      </h3>

      <Card className="p-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-bold text-violet-600">1</span>
            </div>
            <div className="flex-1 bg-slate-50 rounded-lg px-4 py-3 border border-slate-100">
              <p className="text-sm text-slate-800">
                <span className="font-semibold">Мобильные команды</span> в своём проекте самостоятельно открывают Fix Version под следующий релиз.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-bold text-violet-600">2</span>
            </div>
            <div className="flex-1 bg-slate-50 rounded-lg px-4 py-3 border border-slate-100">
              <p className="text-sm text-slate-800">
                <span className="font-semibold">Delivery Manager</span> в плагине Releases в проекте <code className="text-xs bg-slate-200 px-1.5 py-0.5 rounded font-mono">Click Releases</code> собирает все одинаковые Fix Version из мобильных команд в один package.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-bold text-violet-600">3</span>
            </div>
            <div className="flex-1 bg-slate-50 rounded-lg px-4 py-3 border border-slate-100">
              <div className="flex items-start gap-2">
                <Users className="w-4 h-4 text-violet-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-slate-800">
                  После формирования package <span className="font-semibold">релиз-капитаны iOS и Android</span> назначают себя исполнителями.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
