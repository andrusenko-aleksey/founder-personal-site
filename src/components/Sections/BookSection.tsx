import BookSchema from '@/components/Schema/BookSchema';
import book from '@/data/book';
import { withBasePath } from '@/lib/utils';

export default function BookSection() {
  const details: [string, string][] = [
    ['Author', book.author],
    ['Publisher', `${book.publisher}, ${book.placeOfPublication}`],
    ['Editor', book.editor],
    ['Year', String(book.year)],
    ['Pages', String(book.pages)],
    ['Format', book.format],
    ['Language', book.language],
    ['ISBN', book.isbn],
  ];

  return (
    <section id="book" className="onepage-section">
      <BookSchema />
      <div className="book-page">
        <header className="projects-header">
          <h2 className="page-title">Book</h2>
        </header>

        <div className="book-layout">
          {/* biome-ignore lint/performance/noImgElement: static export without next/image runtime */}
          <img
            className="book-cover"
            src={withBasePath(book.cover)}
            alt={`Cover of ${book.titleEnglish} by ${book.author}`}
            width={600}
            height={850}
            loading="lazy"
            decoding="async"
          />

          <div className="book-info">
            <h3 className="book-title" lang={book.languageCode}>
              {book.title}
            </h3>
            <p className="book-title-en">{book.titleEnglish}</p>
            <p className="book-description">{book.description}</p>

            <dl className="book-details">
              {details.map(([label, value]) => (
                <div key={label} className="book-detail">
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <div className="book-actions">
              {book.offers.map((offer) => (
                <a
                  key={offer.url}
                  href={offer.url}
                  className="button button-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy on {offer.seller}
                </a>
              ))}
              {book.offers.map((offer) =>
                offer.priceLabel ? (
                  <span key={offer.priceLabel} className="book-price">
                    {offer.priceLabel}
                  </span>
                ) : null,
              )}
            </div>
            <p className="book-copyright">{book.copyright}</p>
          </div>
        </div>

        <div className="book-contents">
          <h3 className="projects-section-title">Inside the book</h3>
          <ol className="book-parts">
            {book.parts.map((part) => (
              <li key={part.title}>
                <strong>{part.title}</strong>
                <ul>
                  {part.chapters.map((chapter) => (
                    <li key={chapter}>{chapter}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
