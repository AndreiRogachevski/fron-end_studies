import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { metaProducts } from './store/productsSlice';

export default function Pagination() {
  const meta = useSelector(metaProducts);
  let pages = [];
  for (let i = 1; i < meta.total; i++) {
    pages.push(i);
  }
  const navigate = useNavigate();
  const { page } = useParams();
  function switchPage(int) {
    let currentPage = page ? +page + int : 1 + int;
    if (currentPage > meta.total - 1) {
      navigate(`/${meta.total - 1}`);
    } else if (currentPage < 1) {
      navigate('/1');
    } else navigate(`/${currentPage}`);
  }
  return (
    <div className="pagination">
      <button onClick={() => switchPage(-1)} disabled={+page === 1}>
        previous
      </button>
      {pages.map((p, i) => (
        <button
          key={i}
          onClick={() => navigate(`/${p}`)}
          className={p === +page ? 'active' : ''}
        >
          {p}
        </button>
      ))}
      <button
        onClick={() => switchPage(+1)}
        disabled={+page === meta.total - 1}
      >
        next
      </button>
    </div>
  );
}
