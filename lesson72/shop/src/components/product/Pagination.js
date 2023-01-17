import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { metaProducts } from '../../store/productsSlice';

export default function Pagination() {
  const meta = useSelector(metaProducts);
  let pages = Array.from({ length: meta.total_pages }, (x, i) => i + 1);
  const navigate = useNavigate();
  const { page } = useParams();
  function switchPage(int) {
    let currentPage = page ? +page + int : 1 + int;
    if (currentPage > meta.total_pages) {
      navigate(`/${meta.total_pages}`);
    } else if (currentPage < 1) {
      navigate('/1');
    } else navigate(`/${currentPage}`);
  }
  return (
    <nav>
      <ul className="pagination">
        <li
          className={'page-item' + (+page === 1 ? ' disabled' : '')}
          onClick={() => switchPage(-1)}
          aria-label="Previous"
        >
          <span className="page-link" aria-hidden="true">
            &laquo;
          </span>
        </li>
        {pages.map((p, i) => (
          <li
            key={i}
            onClick={() => navigate(`/${p}`)}
            className={'page-item' + (p === +page ? ' active' : '')}
          >
            <span className="page-link">{p}</span>
          </li>
        ))}
        <li
          className={
            'page-item' + (+page === meta.total_pages ? ' disabled' : '')
          }
          onClick={() => switchPage(+1)}
          aria-label="Next"
        >
          <span className="page-link" aria-hidden="true">
            &raquo;
          </span>
        </li>
      </ul>
    </nav>
  );
}
