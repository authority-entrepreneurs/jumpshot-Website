import { Link } from 'react-router-dom';

// Internal paths use the router; anything with a scheme (https:, tel:, mailto:) is a plain anchor.
export default function SmartLink({ to, newTab = false, children, ...rest }) {
  if (/^[a-z]+:/i.test(to)) {
    const tabProps = newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {};
    return (
      <a href={to} {...tabProps} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} {...rest}>
      {children}
    </Link>
  );
}
