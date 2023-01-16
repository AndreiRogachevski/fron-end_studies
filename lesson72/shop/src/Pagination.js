import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { metaProducts } from './store/productsSlice';

export default function Pagination() {
  const meta = useSelector(metaProducts);
  // let pages = [];
  // for (let i = 1; i < meta.total; i++) {
  //   pages.push(i);
  // }
  let pages = Array.from({ length: meta.total_pages }, (x, i) => i + 1);
  const navigate = useNavigate();
  const { page } = useParams();
  function switchPage(int) {
    let currentPage = page ? +page + int : 1 + int;
    if (currentPage > meta.total - 1) {
      navigate(`/${meta.total - 1}`);
    } else if (currentPage < 1) {
      navigate('/page=1');
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
      <select
        onChange={(e) => {
          navigate(`/1&per_page=${e.target.value}`);
        }}
      >
        <option value="10">10</option>
        <option value="30">30</option>
        <option value="50">50</option>
      </select>
    </div>
  );
}
