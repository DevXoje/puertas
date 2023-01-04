import { TestBed } from '@angular/core/testing';

import { TemplatePageTitleStrategyService } from './template-page-title-strategy.service';

describe('TemplatePageTitleStrategyService', () => {
    let service: TemplatePageTitleStrategyService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(TemplatePageTitleStrategyService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
