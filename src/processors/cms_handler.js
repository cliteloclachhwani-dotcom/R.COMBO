/**
 * CMS & Master List Processor
 * Logic: Universal Crew ID Search (LP/ALP mixed master list)
 */
export const getCrewDetails = (crewId, masterData) => {
    if (!crewId || !masterData) return null;
    
    // Search in the global master list (Sheet1)
    const crew = masterData.find(row => 
        row[0]?.toString().toUpperCase() === crewId.trim().toUpperCase()
    );

    if (crew) {
        return {
            id: crew[0],
            name: crew[1] || crew[2], // Name column
            desig: crew[2] || crew[3], // Designation column
            cli: crew[4] || "N/A"
        };
    }
    return null;
};
