/**
 * R.COMBO (RTIS CPMBO) Processor
 * Logic: Filters only ODD numbered rows (1, 3, 5...) to remove duplicates.
 */
export const processRtisCombo = (csvData) => {
    const rows = csvData.split('\n').filter(row => row.trim() !== '');
    const header = rows[0];
    
    const filteredRows = rows.slice(1).filter((row) => {
        const columns = row.split(',');
        // Extract Sr.No and clean quotes
        const srNo = parseInt(columns[0].replace(/"/g, ''));
        return srNo % 2 !== 0; // Keeping 1, 3, 5, 7...
    });

    console.log(`R.COMBO: Processed ${rows.length - 1} rows down to ${filteredRows.length}`);
    return [header, ...filteredRows].join('\n');
};
