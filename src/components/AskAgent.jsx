import React from 'react';

export default function AskAgent() {
    return (
        <div className="relative flex flex-col items-start h-[175px] w-full max-w-[1440px] bg-white">
            <span
                className="absolute top-[10px] left-[158px] w-[388px] h-[30px] text-left text-black font-semibold text-[24px] font-['Segoe UI']"
                aria-label="Ask your assistant"
            >
                Ask your assistant
            </span>
            <div
                className="absolute top-[56px] left-[53px] w-[1339px] h-[54px] bg-[#d9d9d9]"
                aria-hidden="true"
            />
        </div>
    );
}