import SmartLink from './SmartLink';
import { ArrowIcon } from './Icons';

// One CTA style site-wide. `ghost` is the outlined secondary used on dark backgrounds.
export default function Button({ to, ghost = false, size, newTab, children }) {
  const cls = ['btn', ghost && 'btn--ghost', size && `btn--${size}`].filter(Boolean).join(' ');
  return (
    <SmartLink to={to} newTab={newTab} className={cls}>
      <span>{children}</span>
      <ArrowIcon />
    </SmartLink>
  );
}
