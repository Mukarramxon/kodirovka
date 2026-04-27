import {
  ArrowRightLeft,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Palette,
  Monitor,
  Smartphone,
  Image,
  Type,
  Layers,
} from 'lucide-react';

function Card({ children, className = '' }) {
  return <div className={`rounded-xl border border-slate-200 bg-white shadow-sm ${className}`}>{children}</div>;
}

function Badge({ children, variant = 'default' }) {
  const s = { default: 'bg-slate-100 text-slate-700', primary: 'bg-primary-50 text-primary-700', success: 'bg-emerald-50 text-emerald-700', warning: 'bg-amber-50 text-amber-700' };
  return <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${s[variant]}`}>{children}</span>;
}

export default function Handoff() {
  return (
    <section>
      <div id="handoff-overview" className="mb-8 scroll-mt-20">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-primary-50">
            <ArrowRightLeft className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Передача в разработку</h2>
        </div>
        <p className="text-slate-600 leading-relaxed ml-[52px]">
          Качественный handoff из Figma в разработку — ключ к pixel-perfect реализации.
          Стандартизированный процесс снижает количество итераций и недопониманий между дизайном и dev.
        </p>
      </div>

      <h3 id="handoff-figma" className="text-lg font-semibold text-slate-900 mt-10 mb-4 scroll-mt-20 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
        Стандарты Figma → Development
      </h3>

      <Card>
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Перед передачей дизайна в разработку дизайнер проверяет макет по чек-листу.
                Разработчик не начинает работу, пока handoff не прошёл Definition of Ready для дизайна.
              </p>
              <div className="space-y-2">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Чек-лист дизайнера</p>
                {[
                  'Все экраны доступны в Figma с корректными именами фреймов',
                  'Использованы компоненты из дизайн-системы (не detached)',
                  'Адаптивные варианты: Desktop, Tablet, Mobile',
                  'Состояния: default, hover, active, disabled, error, loading',
                  'Токены и переменные заданы (цвета, отступы, радиусы)',
                  'Иконки — из единой библиотеки (Lucide / Click Icons)',
                  'Прототип с переходами (для сложных флоу)',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-rose-50 rounded-lg p-4 border border-rose-100">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-rose-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-rose-800 mb-2">Критические правила</p>
                    <ul className="space-y-1.5 text-sm text-rose-700">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-rose-500 flex-shrink-0" />
                        <strong>Брендовые логотипы</strong> — всегда в оригинальных цветах. Никогда не переводите в монохром.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-rose-500 flex-shrink-0" />
                        <strong>Шрифты</strong> — только из утверждённого набора (Inter, системные).
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-rose-500 flex-shrink-0" />
                        <strong>Экспорт ассетов</strong> — SVG для иконок, WebP для фото, @2x для ретины.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-primary-50 rounded-lg p-4 border border-primary-100">
                <div className="flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-primary-700 leading-relaxed">
                    Используйте Dev Mode в Figma для инспекции отступов, цветов и CSS-свойств.
                    Это сокращает вопросы дизайнеру на 60%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <h3 id="handoff-responsive" className="text-lg font-semibold text-slate-900 mt-10 mb-4 scroll-mt-20 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
        Правила адаптивной вёрстки
      </h3>

      <Card>
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <th className="text-left px-4 py-2.5 font-semibold text-slate-700">Breakpoint</th>
                      <th className="text-left px-4 py-2.5 font-semibold text-slate-700">Ширина</th>
                      <th className="text-left px-4 py-2.5 font-semibold text-slate-700">Устройство</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      ['sm', '640px', 'Крупный телефон'],
                      ['md', '768px', 'Планшет (portrait)'],
                      ['lg', '1024px', 'Планшет (landscape) / ноутбук'],
                      ['xl', '1280px', 'Десктоп'],
                      ['2xl', '1536px', 'Большой экран'],
                    ].map(([bp, w, dev]) => (
                      <tr key={bp} className="hover:bg-slate-50">
                        <td className="px-4 py-2"><code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded font-mono">{bp}</code></td>
                        <td className="px-4 py-2 text-slate-600">{w}</td>
                        <td className="px-4 py-2 text-slate-600">{dev}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Принципы</p>
              {[
                { icon: Smartphone, text: 'Mobile-first: начинаем со стилей для мобильных, расширяем через breakpoints' },
                { icon: Monitor, text: 'Контент определяет breakpoints, а не устройства' },
                { icon: Image, text: 'Изображения — responsive: srcset + sizes, формат WebP' },
                { icon: Type, text: 'Типографика — fluid: clamp() для размеров от mobile до desktop' },
                { icon: Layers, text: 'Компоненты — контейнерно-независимые: работают в любом layout' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.text} className="flex items-start gap-2.5">
                    <Icon className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
