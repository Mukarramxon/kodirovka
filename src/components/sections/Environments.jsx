import {
  Server,
  Monitor,
  Cloud,
  Shield,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
} from 'lucide-react';

function Card({ children, className = '' }) {
  return <div className={`rounded-xl border border-slate-200 bg-white shadow-sm ${className}`}>{children}</div>;
}

function Badge({ children, variant = 'default' }) {
  const s = { default: 'bg-slate-100 text-slate-700', primary: 'bg-primary-50 text-primary-700', success: 'bg-emerald-50 text-emerald-700', warning: 'bg-amber-50 text-amber-700' };
  return <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${s[variant]}`}>{children}</span>;
}

const envs = [
  {
    name: 'Local',
    icon: Monitor,
    color: 'bg-slate-500',
    badge: 'default',
    desc: 'Локальная среда разработчика. Docker Compose поднимает все зависимости. Hot-reload включён.',
    rules: [
      'Все сервисы запускаются через docker-compose up',
      'Используйте .env.local для конфигурации',
      'БД сбрасывается при каждом перезапуске (seed-данные)',
      'Интеграционные тесты запускаются локально перед PR',
    ],
  },
  {
    name: 'Dev',
    icon: Server,
    color: 'bg-blue-500',
    badge: 'primary',
    desc: 'Общая среда разработки. Автоматический деплой из ветки develop. Может быть нестабильна.',
    rules: [
      'Деплой при каждом мерже в develop',
      'Данные — синтетические (никаких реальных данных клиентов)',
      'Можно свободно тестировать и ломать',
      'Мониторинг через Grafana-дашборд (Dev)',
    ],
  },
  {
    name: 'Staging',
    icon: Cloud,
    color: 'bg-amber-500',
    badge: 'warning',
    desc: 'Предрелизная среда. Зеркалирует Production. Финальное UAT-тестирование перед релизом.',
    rules: [
      'Деплой только из ветки release/*',
      'Данные анонимизированы, но структурно идентичны Prod',
      'UAT-тестирование Product Owner обязательно',
      'Нагрузочное тестирование проводится здесь',
    ],
  },
  {
    name: 'Production',
    icon: Shield,
    color: 'bg-emerald-500',
    badge: 'success',
    desc: 'Боевая среда. Обслуживает реальных пользователей. Деплой — только через утверждённый релизный процесс.',
    rules: [
      'Деплой только через CI/CD-пайплайн с апрувами',
      'Blue-green деплой для нулевого даунтайма',
      'Обязательный rollback-план для каждого релиза',
      'Мониторинг 24/7: алерты в Slack, PagerDuty',
    ],
  },
];

export default function Environments() {
  return (
    <section>
      <div id="environments-overview" className="mb-8 scroll-mt-20">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-primary-50">
            <Server className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Среды</h2>
        </div>
        <p className="text-slate-600 leading-relaxed ml-[52px]">
          Код проходит через четыре среды прежде, чем попасть к пользователям. Каждая среда имеет
          свои правила, уровень доступа и назначение.
        </p>
      </div>

      <h3 id="environments-flow" className="text-lg font-semibold text-slate-900 mt-10 mb-4 scroll-mt-20 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
        Поток продвижения кода
      </h3>

      <Card className="p-6 mb-8">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {envs.map((env, idx) => (
            <div key={env.name} className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <div className={`w-8 h-8 rounded-full ${env.color} flex items-center justify-center`}>
                  <env.icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-semibold text-slate-800">{env.name}</span>
              </div>
              {idx < envs.length - 1 && (
                <ArrowRight className="w-4 h-4 text-slate-300 flex-shrink-0" />
              )}
            </div>
          ))}
        </div>
      </Card>

      <h3 id="environments-details" className="text-lg font-semibold text-slate-900 mt-10 mb-4 scroll-mt-20 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
        Описание сред
      </h3>

      <div className="space-y-4">
        {envs.map((env) => {
          const Icon = env.icon;
          return (
            <Card key={env.name}>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-lg ${env.color} flex items-center justify-center`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">{env.name}</h4>
                        <Badge variant={env.badge}>{env.name}</Badge>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{env.desc}</p>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Правила</p>
                    <div className="space-y-2">
                      {env.rules.map((rule) => (
                        <div key={rule} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-700">{rule}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <h3 id="environments-rules" className="text-lg font-semibold text-slate-900 mt-10 mb-4 scroll-mt-20 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
        Золотые правила
      </h3>

      <Card className="p-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            {[
              'Никогда не деплойте напрямую в Production в обход CI/CD',
              'Staging всегда должен отражать Production по конфигурации',
              'Секреты хранятся в Vault — никогда в коде или .env',
              'Каждый деплой в Staging/Prod сопровождается тегом в Git',
            ].map((rule) => (
              <div key={rule} className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700">{rule}</span>
              </div>
            ))}
          </div>
          <div className="bg-primary-50 rounded-lg p-4 border border-primary-100">
            <div className="flex items-start gap-2">
              <Lightbulb className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-primary-800 mb-1">Совет</p>
                <p className="text-sm text-primary-700 leading-relaxed">
                  Если вы не уверены, в какую среду деплоить — спросите в канале <code className="text-xs bg-primary-100 px-1 rounded">#devops</code> в Slack. 
                  Лучше спросить дважды, чем сломать Production.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
