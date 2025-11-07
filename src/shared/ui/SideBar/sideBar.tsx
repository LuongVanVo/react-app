import { UserProfileMenu, InfoWorkspace } from "@/shared/ui/SideBar/components/index";
import { Link } from "react-router-dom";
import { useState } from "react";

export function SideBar() {
    const [isBoardsExpanded, setIsBoardsExpanded] = useState(true);
    return (
        <div className="w-68 h-screen bg-gray-50 border-r border-gray-200 flex flex-col">
            <InfoWorkspace />
            
           {/* Navigation */}
            <div className="flex-1 overflow-y-auto">
                {/* Navigation Section */}
                <div className="px-2 py-3">
                    <div className="text-xs font-medium text-gray-500 px-2 mb-1">Navigation</div>
                    <div className="flex items-center gap-2 px-2 mb-1 cursor-pointer hover:bg-gray-100 transition-colors rounded-lg p-2">
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                            <path d="M96 160C96 124.7 124.7 96 160 96L480 96C515.3 96 544 124.7 544 160L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 160zM160 224L160 480L288 480L288 224L160 224zM480 224L352 224L352 480L480 480L480 224z"/>
                        </svg>
                        <Link to="/home" className="text-sm font-medium">Dashboard</Link>
                    </div>
                </div>

                {/* Boards Section */}
                <div className="px-2 py-3 border-gray-200">
                    <div className="text-xs font-medium text-gray-500 px2 mb-1">Boards</div>

                    {/* All boards - Expandable */}
                    <div className="mb-1">
                        <div className="flex items-center gap-3 px-2 py-2 rounded hover:bg-gray-100 cursor-pointer select-none" onClick={() => setIsBoardsExpanded(!isBoardsExpanded)}>
                            <svg className={`w-3 h-3 ${isBoardsExpanded ? 'rotate-0' : '-rotate-90'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
                            </svg>
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 3v14"></path><path d="M12 3v8"></path><path d="M19 3v18"></path></svg>
                            <span>All boards</span>
                        </div>
                        {/* Nested boards */}
                        {isBoardsExpanded && (
                            <div className="flex gap-2 ml-3 pl-2 relative">
                            <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-300"></div>
                            <div className="flex flex-col gap-1 w-full pl-4">
                                {isBoardsExpanded && (
                                    <>
                                        <div className="text-sm rounded-md hover:bg-gray-100 cursor-pointer p-1 ml-2 w-full">Project Alpha</div>
                                        <div className="text-sm rounded-md hover:bg-gray-100 cursor-pointer p-1 ml-2 w-full">Marketing Campaign</div>
                                    </>
                                )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* User Footer */}
            <UserProfileMenu />
        </div>
    )
}