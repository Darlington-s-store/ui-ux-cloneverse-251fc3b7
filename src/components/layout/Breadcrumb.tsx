
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <div className="breadcrumb container-custom py-4">
      <Link to="/" className="breadcrumb-item">Home</Link>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <span className="breadcrumb-separator">/</span>
          {index === items.length - 1 ? (
            <span className="breadcrumb-item active">{item.label}</span>
          ) : (
            <Link to={item.path} className="breadcrumb-item">
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;
