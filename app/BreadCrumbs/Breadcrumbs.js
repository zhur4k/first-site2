import Link from 'next/link';
import styles from './Breadcrumbs.module.css'; // Импортируйте свои стили

const Breadcrumbs = ({ crumbs }) => {
  return (
    <div className={styles.breadcrumbs}>
      {crumbs.map((crumb, i) => (
        <span key={i}>
          <Link href={crumb.href}>
            {crumb.title}
          </Link>
          {i < crumbs.length - 1 ? '' : ''}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;