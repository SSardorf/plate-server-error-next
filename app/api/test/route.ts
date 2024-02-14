import { createPlateEditor } from "@udecode/plate-common";

export const GET = async () => {
    const plate = createPlateEditor();

    console.log(plate);
};
