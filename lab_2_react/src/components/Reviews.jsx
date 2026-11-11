import { useEffect, useState } from 'react';
import { VARIANT } from '../config';

// Відгуки «попередніх роботодавців» з JSONPlaceholder.
// useEffect з порожнім масивом залежностей -> запит виконується один раз при монтуванні.
function Reviews() {
  const [comments, setComments] = useState([]);
  const [status, setStatus] = useState('loading'); // loading | done | error
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController(); // скасування запиту, якщо компонент демонтовано

    async function load() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`,
          { signal: controller.signal },
        );
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        setComments(await response.json());
        setStatus('done');
      } catch (err) {
        if (err.name === 'AbortError') return;
        setError(err.message);
        setStatus('error');
      }
    }

    load();
    return () => controller.abort();
  }, []);

  return (
    <section
      id="reviews"
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md md:col-span-2 dark:border-slate-700 dark:bg-slate-800"
    >
      <h2 className="mb-1 text-xl font-bold text-brand-600 dark:text-blue-300">Відгуки роботодавців</h2>
      <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">
        JSONPlaceholder: <code>/posts/{VARIANT}/comments</code>
      </p>

      {status === 'loading' && <p className="text-slate-500">Завантаження відгуків…</p>}
      {status === 'error' && <p className="text-red-600">Не вдалося завантажити відгуки: {error}</p>}

      {status === 'done' && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {comments.map((comment) => (
            <article
              key={comment.id}
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
            >
              <h3 className="font-semibold capitalize text-slate-900 dark:text-slate-100">{comment.name}</h3>
              <p className="mb-2 text-xs text-brand-600 dark:text-blue-300">{comment.email}</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">{comment.body}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default Reviews;
