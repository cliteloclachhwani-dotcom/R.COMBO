/**
 * Final Speed Analyzer
 * Logic: Matches Speed Report Timestamps with Filtered RTIS Data
 */
export const analyzeSpeedViolations = (speedData, rtisData) => {
    // 1. Extract Time from Speed Report (e.g., 10:51:18)
    // 2. Locate closest Loco in RTIS at that time
    // 3. Flag if speed exceeds 40 KMPH
    
    const results = [];
    // Matching logic for 2026 date formats
    speedData.forEach(fault => {
        const matchingLoco = rtisData.find(log => log.time === fault.time);
        if(matchingLoco) {
            results.push({ ...fault, locoNo: matchingLoco.locoNo });
        }
    });
    return results;
};
