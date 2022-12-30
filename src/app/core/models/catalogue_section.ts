import { Image } from './image';
import { SectionHeader } from '@core/models/Section';

export type Catalogue_Section = {
    header?: SectionHeader;
    images: Image[];
    footer?: string[];
};
