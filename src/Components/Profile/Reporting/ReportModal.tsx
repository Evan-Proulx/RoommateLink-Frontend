import React, {useEffect, useState} from 'react';
import {checkReportEligibility, ReportData, reportUser} from "../../API/Reporting"
import {useNavigate} from "react-router-dom";

interface ReportModalProps{
    userToReport: number,
    closeModal: () => void,
}
const ReportModal = ({userToReport, closeModal}: ReportModalProps) => {
    const navigate = useNavigate();
    const [displayAlert, setDisplayAlert] = useState({display: false, content: "Unable to update!"});
    const [reportData, setReportData] = useState<ReportData>({
        reported_id: userToReport,
        reported_inappropriate: false,
        reported_harassment: false,
        reported_safety: false,
        reported_scams: false,
        reported_misrepresentation: false,
    });

    //Set label value for each report category
    const reportMap = [
        { id: 'reported_inappropriate', label: 'Inappropriate content' },
        { id: 'reported_harassment', label: 'Harassment' },
        { id: 'reported_safety', label: 'Safety concern' },
        { id: 'reported_scams', label: 'Scams or fraud' },
        { id: 'reported_misrepresentation', label: 'Misrepresentation/Phishing' },
    ];

    //Set reportData based on the checkbox value
    const handleCheckboxReport = (e) => {
        const {name, checked} = e.target;
        setReportData(prev => ({
            ...prev,
            [name]: checked
        }));


    };

    useEffect(() => {
        console.log(reportData)
    }, [reportData]);

    const submitReport = async (e: React.FormEvent) => {
        e.preventDefault();

        //Check if user has already reported this user before reporting
        try{
            const response = await checkReportEligibility(userToReport);
            console.log(response);

            //If user hasn't reported this user before, allow reporting
            if (response === true){
                try{
                    const response = await reportUser(reportData);
                    console.log(response);

                    //Close modal once reported
                    closeModal();
                }catch(err){
                    console.error(err)
                    setDisplayAlert({display: true, content: "Unable to update!"})
                }
            }else{
                // Alert the user that they can only report once if eligibility is false
                setDisplayAlert({display: true, content: "You can only report a user once."})
            }
        }catch (err){
            console.error(err)
            setDisplayAlert({display: true, content: "Unable to update!"})
        }
    }

    return (
        <div className={"p-6"}>
            <h1 className={"font-extrabold text-2xl"}>Report User</h1>
            <form onSubmit={submitReport}>
                <div className="mb-4">
                    <p className="text-gray-700 mb-2">Please select all that apply:</p>

                    <div className="space-y-2">
                        {reportMap.map((reportType, index) => (
                            <label key={index} className="flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    name={reportType.id}
                                    checked={reportData[reportType.id]}
                                    onChange={handleCheckboxReport}
                                    className="mr-2 h-4 w-4 cursor-pointer"
                                />
                                <span>{reportType.label}</span>
                            </label>
                        ))}
                    </div>
                </div>
                {displayAlert.display && <p className={"font-bold text-lg text-center"}>{displayAlert.content}</p>}
                <div className="space-x-2 pt-4">
                    <button type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ReportModal;