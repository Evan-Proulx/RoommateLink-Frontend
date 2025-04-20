import React, {useState} from 'react';
import ShadowButton from "../../Shadow-Button";
import {useFormContext} from "react-hook-form";
import {Error, Warning} from "@mui/icons-material";

const SubmitSurvey = ({submissionError}) => {
    const { formState: { isValid, isDirty } } = useFormContext();

    return (
       <div className={"py-40 content-center"}>
           {isValid ? (
               <div><h1 className={"header-text-big text-center"}>Survey Complete!</h1>
                   <h2 className={"header3-text text-center text-black"}>Your answers can be changed at anytime on the
                       profile
                       page. Now its time to find your perfect roommate! Click the “Submit” button to navigate to the
                       feed.</h2></div>
           ) : (
               <h2 className={"text-xl font-bold text-center text-black"}><Error/>Please complete all the required fields before submitting your survey.<Error/></h2>
            )}
            <div className={"flex justify-center"}>
                {/*Display disabled submit button if the form isnt valid*/}
                {isValid ? (
                <ShadowButton value={"Submit"} width={"2/5"}/>
                ) : (
                    <ShadowButton value={"Submit"} color={"disabled"} disabled={true} width={"2/5"}/>
                )}
            </div>
           {/*Display error if submission is unsuccessful*/}
           {submissionError && <p className={"pt-4 text-center font-bold text-text"}><Warning/> There was an error submitting</p>}
       </div>
    );
};

export default SubmitSurvey;