import { Menu, Transition } from "@headlessui/react"
import { Fragment } from "react"
import { FiCheck, FiPlus } from "react-icons/fi";

export function InfoWorkspace() {
    const allWorkspaces = [
        { id: '1', name: 'Company Workspace', boardCount: 2 },
        { id: '2', name: 'Personal Projects', boardCount: 1 },
    ];
    const currentWorkspaceId = '1';
    return (
        <Menu as="div" className="relative">
        <Menu.Button className="p-4 hover:bg-gray-100 transition-colors rounded-lg m-1 w-full text-left">
          <div className="flex items-center gap-2 w-full">
            {/* Logo */}
            <div className="w-10 h-10 rounded flex items-center justify-center font-semibold text-sm text-white font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.6 201.7c14.5 85.9-30.9 167.9-113.2 208.1 13 34.1-12.4 70.2-48.3 70.2-13.2 0-26-5.1-35.6-14.2s-15.3-21.6-16-34.8c-6.4 .2-64.2 0-76.3-.6-.3 6.8-1.9 13.5-4.7 19.6s-6.9 11.7-11.9 16.3-10.8 8.2-17.2 10.5-13.2 3.4-19.9 3.1c-33.9-1.4-58-34.8-47-67.9-37.2-13.1-72.5-34.9-99.6-70.8-13-17.3-.5-41.8 20.8-41.8 46.3 0 32.2-54.2 43.2-110.3 18.4-93.9 116.8-157.1 211.7-157.1 102.5 0 197.2 70.7 214.1 169.7zM373.9 388.3c42-19.2 81.3-56.7 96.3-102.1 40.5-123.1-64.2-228-181.7-228-83.4 0-170.3 55.4-186.1 136-9.5 48.9 5 131.4-68.7 131.4 24.9 33.1 58.3 52.6 93.7 64 24.7-21.8 63.9-15.5 79.8 14.3 14.2 1 79.2 1.2 87.9 .8 3.5-6.9 8.5-12.9 14.7-17.5s13.2-7.9 20.8-9.5 15.4-1.4 22.9 .4 14.5 5.3 20.5 10.2zM205.5 187.1c0-34.7 50.8-34.7 50.8 0s-50.8 34.7-50.8 0zm116.6 0c0-34.7 50.9-34.7 50.9 0s-50.9 34.8-50.9 0zM199.5 257.8c-3.4-16.9 22.2-22.2 25.6-5.2l.1 .3c4.1 21.4 29.8 44 64.1 43.1 35.7-.9 59.3-22.2 64.1-42.8 4.5-16.1 28.6-10.4 25.5 6-5.2 22.2-31.2 62-91.5 62.9-42.6 0-80.9-27.8-87.9-64.2l0 0z"/></svg>
            </div>
            {/* Workspace Name */}
            <div className="flex-col flex-1">
              <div className="text-sm font-semibold text-gray-900">Company Workspace</div>
              <div className="text-xs text-gray-500">Main company workspace</div>
            </div>
            {/* Chevron Icon */}
            <div className="w-3 h-3 ml-auto text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
            </div>
          </div>
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute top-2 left-full ml-2 w-72 origin-top-left bg-white rounded-md shadow-lg border border-gray-200 focus:outline-none">
            
            {/* Tiêu đề "Workspaces" */}
            <div className="px-4 py-3">
              <div className="text-xs font-medium text-gray-500">Workspaces</div>
            </div>

            {/* Danh sách Workspaces */}
            <div className="py-1">
              {allWorkspaces.map((workspace) => (
                <Menu.Item key={workspace.id}>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } group flex items-center w-full px-4 py-2 text-sm text-gray-900`}
                    >
                      {/* Icon */}
                      <div className={`w-8 h-8 rounded-md bg-blue-600 text-white flex items-center justify-center font-bold text-xs mr-3`}>
                        {workspace.name.substring(0, 2).toUpperCase()}
                      </div>
                      {/* Text */}
                      <div className="flex flex-col items-start flex-1">
                        <div className="font-medium">{workspace.name}</div>
                        <div className="text-xs text-gray-500">{workspace.boardCount} boards</div>
                      </div>
                      {workspace.id === currentWorkspaceId && (
                        <div className="w-4 h-4 text-blue-600">
                          <FiCheck />
                        </div>
                      )}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>

            {/* Đường kẻ ngang */}
            <div className="h-px bg-gray-200 mx-1"></div>

            {/* Nút "Create" */}
            <div className="p-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-100' : ''
                    } group flex items-center w-full px-4 py-2 text-sm text-gray-700 rounded-md`}
                  >
                    <FiPlus className="w-4 h-4 mr-2" />
                    Create workspace
                  </button>
                )}
              </Menu.Item>
            </div>
            
          </Menu.Items>
        </Transition>
      </Menu>
    )
}