import { img } from '../data/site';
import usePageTitle from '../components/usePageTitle';
import PageHero from '../components/PageHero';
import Button from '../components/Button';

export default function NotFound() {
  usePageTitle('Page not found');

  return (
    <PageHero image={img('MG_1444_Edited.jpg')} eyebrow="404" title="Page not found">
      <div className="btn-row">
        <Button to="/">
          Back to Home
        </Button>
      </div>
    </PageHero>
  );
}
