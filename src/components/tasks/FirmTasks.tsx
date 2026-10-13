"use client";

import { useEffect, useState } from "react";
import { FIRM_TASKS } from "@/lib/firm-tasks";

/**
 * The checklist itself (D127). Ticks are saved in this browser only
 * (localStorage), so each person sees their own progress on their own device.
 */
const KEY = "hmp-tasks-v1";
const total = FIRM_TASKS.reduce((n, g) => n + g.items.length, 0);

export default function FirmTasks() {
  const [done, setDone] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(KEY);
      // Reading browser storage has to wait for the client; the first paint
      // is the empty list either way.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (saved) setDone(JSON.parse(saved));
    } catch {}
  }, []);

  const toggle = (id: string) =>
    setDone((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      try {
        window.localStorage.setItem(KEY, JSON.stringify(next));
      } catch {}
      return next;
    });

  const count = Object.values(done).filter(Boolean).length;

  return (
    <>
      <div className="sticky top-[68px] z-10 border-b border-navy/10 bg-white py-4 sm:top-[76px]">
        <p className="font-display text-2xl tabular-nums">
          {count} of {total} done
        </p>
        <div className="mt-2 h-1.5 bg-navy/[0.08]">
          <div className="h-full bg-bronze transition-[width] duration-300" style={{ width: `${(100 * count) / total}%` }} />
        </div>
      </div>

      {FIRM_TASKS.map((group) => {
        const n = group.items.filter((t) => done[t.id]).length;
        return (
          <section key={group.id} className="mt-12">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-display text-4xl">{group.title}</h2>
              <p className="text-sm text-navy/70 tabular-nums">
                {n} of {group.items.length} done
              </p>
            </div>
            <ul className="mt-4 grid gap-3">
              {group.items.map((t) => (
                <li
                  key={t.id}
                  className={`flex gap-4 border p-4 sm:p-5 ${done[t.id] ? "border-[#2f6b4f]/40" : "border-navy/15"}`}
                >
                  <input
                    id={`task-${t.id}`}
                    type="checkbox"
                    checked={!!done[t.id]}
                    onChange={() => toggle(t.id)}
                    className="mt-1 h-5 w-5 shrink-0 cursor-pointer accent-[#2f6b4f]"
                  />
                  <div className="min-w-0">
                    <label
                      htmlFor={`task-${t.id}`}
                      className={`cursor-pointer font-medium ${done[t.id] ? "text-navy/60 line-through" : "text-navy"}`}
                    >
                      {t.title}
                    </label>
                    {t.links?.length ? (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {t.links.map(([label, href]) => (
                          <a
                            key={href}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-navy/20 px-3 py-1.5 text-sm font-medium text-navy transition-colors hover:border-bronze hover:text-bronze"
                          >
                            {label} ↗
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </>
  );
}
