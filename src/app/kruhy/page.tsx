import type { Metadata } from 'next';
import Circles from '../components/Circles';
import { circlesListMetadata } from './circleShared';

export const metadata: Metadata = circlesListMetadata('cs');

export default function CirclesPage() {
  return <Circles />;
}
