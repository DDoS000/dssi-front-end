import { alignment, defaultDataType } from 'export-xlsx';

// Export settings
export const SETTINGS_FOR_EXPORT = {
  // Table settings
  fileName: 'data',
  workSheets: [
    {
      sheetName: 'data',
      startingRowNumber: 1,
      gapBetweenTwoTables: 2,
      tableSettings: {
        exportData: {
          headerDefinition: [
            {
              name: '#',
              key: 'key',
            },
            {
              name: 'username',
              key: 'username',
            },
            {
              name: 'fullname',
              key: 'fullname',
            },
            {
              name: 'password',
              key: 'password',
            },
            {
              name: 'status',
              key: 'status',
            },
          ],
        }
      }
    },
  ],
};

