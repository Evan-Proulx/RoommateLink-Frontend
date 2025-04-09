export interface ReportData {
    reported_id: number;
    reported_inappropriate: boolean;
    reported_harassment: boolean;
    reported_safety: boolean;
    reported_scams: boolean;
    reported_misrepresentation: boolean;
}
export declare const reportUser: (reportData: ReportData) => Promise<any>;
export declare const checkReportEligibility: (userId: any) => Promise<any>;
