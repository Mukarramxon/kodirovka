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
    </section>
  );
}
