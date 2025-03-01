'use client';

import React, { useEffect, useRef } from 'react';
import { Popover } from 'flowbite';
import type { PopoverOptions, PopoverInterface, InstanceOptions } from 'flowbite';
import {Help} from "@mui/icons-material";
import { grey } from '@mui/material/colors';
import {Link} from "react-router-dom";
const PopoverButton: React.FC = () => {
    const triggerRef = useRef<HTMLButtonElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);
    let popoverInstance: PopoverInterface | null = null;

    useEffect(() => {
        if (contentRef.current && triggerRef.current) {
            const options: PopoverOptions = {
                placement: 'top',
                triggerType: 'hover',
                offset: 10,
                onHide: () => console.log('Popover is hidden'),
                onShow: () => console.log('Popover is shown'),
                onToggle: () => console.log('Popover is toggled'),
            };

            const instanceOptions: InstanceOptions = {
                id: 'popoverContent',
                override: true,
            };

            popoverInstance = new Popover(
                contentRef.current,
                triggerRef.current,
                options,
                instanceOptions
            );
        }

        return () => {
            popoverInstance?.hide();
        };
    }, []);

    return (
        <div className="relative inline-block">
            <button
                ref={triggerRef}
                type="button">
                <Help sx={{color: grey[500]}}/>
            </button>
            <div
                ref={contentRef}
                data-popover id="popover-description" role="tooltip" className="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-xs opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400">
                <div className="p-3 space-y-2">
                    <h3 className="font-semibold text-gray-900 dark:text-white">What are links?</h3>
                    <p>Links are users who most closely match your roommate preferences. These links are selected by a matching algorithm that takes the information you gave in the survey, and finds users with similar data.</p>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Links not good enough?</h3>
                    <p>Try refining your roommate search on the discover tab!</p>
                    {/*Navigate to discovery tab*/}
                    <Link to={"/discovery"} className="flex items-center font-medium text-blue-600 dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700 hover:underline">Discovery <svg className="w-2 h-2 ms-1.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-line-join="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg></Link>
                </div>
                <div data-popper-arrow=""></div></div>
        </div>
    );
};

export default PopoverButton;
