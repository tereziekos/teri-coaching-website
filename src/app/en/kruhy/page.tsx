import type { Metadata } from 'next';
import Circles from '../../components/Circles';
import { circlesListMetadata } from '../../kruhy/circleShared';

export const metadata: Metadata = circlesListMetadata('en');

export default function EnCirclesPage() {
  return <Circles />;
}
