import {
  Button,
  ColorsEnum,
  DataNotFound,
  FontsEnum,
  Form,
  IconsEnum,
  InputComponentsEnum,
  InputTextMasksEnum,
  Label,
  Modal,
  Table,
  TableCellComponents,
  TableColumn,
  TableRow,
  useCrud,
} from "@faridsh69/react-utils";
import styles from "./GymApp.module.scss";
import {
  TEST_QUERY_KEY_APIS,
  TEST_QUERY_KEYS,
} from "../stories/extra/useCrudProducts";
import { useCallback, useMemo, useState } from "react";

export const GymApp = () => {
  const {
    list: programes,
    createMutation,
    updateMutation,
    deleteMutation,
  } = useCrud(TEST_QUERY_KEY_APIS, TEST_QUERY_KEYS.gym.programs);

  console.log("list of programes", programes);

  const tableColumns: TableColumn[] = [
    {
      id: "name",
      label: "Name",
      component: TableCellComponents.Title,
    },
    {
      id: "steps",
      label: "Steps",
      component: TableCellComponents.Title,
    },
    {
      id: "view",
      icon: IconsEnum.View,
      component: TableCellComponents.ViewAction,
    },
    {
      id: "delete",
      icon: IconsEnum.Trash,
      component: TableCellComponents.DeleteAction,
    },
  ];

  const tableRows: TableRow[] = useMemo(() => {
    return programes.map((program: any) => ({
      id: program.id,
      cells: [
        {
          columnId: "name",
          props: {
            label: program.name,
          },
        },
        {
          columnId: "steps",
          props: {
            label: program.steps?.length || 0,
          },
        },
        {
          columnId: "view",
          props: {
            onClick: () => {
              openModal(program);
            },
          },
        },
        {
          columnId: "delete",
          props: {
            onClick: () => {
              deleteProgram(program.id);
            },
          },
        },
      ],
    }));
  }, [programes]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formProgram, setFormProgram] = useState<any>({
    name: "",
    description: "",
  });

  const openModal = useCallback((program?: any) => {
    console.log("xprogram", program);
    setIsModalOpen(true);
    if (program) {
      console.log("X");
      setFormProgram(program);
    }
  }, []);

  const onChangeInput = (_: any, finalFormData: any) => {
    setFormProgram(finalFormData);
  };

  const saveProgram = () => {
    if (formProgram.id) {
      updateMutation.mutate({
        data: formProgram,
        onSuccess: () => {
          setIsModalOpen(false);
        },
      });
      return;
    }

    createMutation.mutate({
      data: formProgram,
      onSuccess: () => {
        setIsModalOpen(false);
      },
    });
  };

  const deleteProgram = (programId: number) => {
    deleteMutation.mutate({
      id: programId,
    });
  };

  return (
    <div className={styles.home}>
      <Label label={"Welcome to Gym App"} font={FontsEnum.Header26} />
      {!programes.length ? (
        <div className={styles.marginTop100}>
          <DataNotFound label="No programs found, please create your first program" />
        </div>
      ) : (
        <Table columns={tableColumns} rows={tableRows} />
      )}
      <Button
        label="Create Program"
        icon={IconsEnum.Plus}
        onClick={() => openModal()}
      />
      <Modal
        title="Create Program"
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        body={
          <Form
            width={800}
            values={formProgram}
            onChangeInput={onChangeInput}
            hiddenSubmitButtonId="x"
            showValidations={false}
            inputs={[
              {
                name: "name",
                label: "Name",
                component: InputComponentsEnum.Text,
                required: true,
              },
              {
                name: "Price",
                columns: 12,
                component: InputComponentsEnum.Text,
                mask: InputTextMasksEnum.PriceEn,
                icon: IconsEnum.Money,
                // unit: "$",
                placeholder: "Price",
                clearable: true,
              },
              {
                name: "tags",
                label: "Tags",
                component: InputComponentsEnum.Select,
                multiple: true,
                options: [
                  { value: "Burn Fat", label: "Burn Fat" },
                  { value: "Create Muscle", label: "Create Muscle" },
                  { value: "Fitness", label: "Fitness" },
                ],
              },
              {
                name: "active",
                label: "Is your program active?",
                component: InputComponentsEnum.Checkbox,
                required: true,
              },
              {
                name: "steps",
                columns: 12,
                component: InputComponentsEnum.Group,
                noItemsLabel: "No step set yet, please add at least one",
                label: "Add new step",
                inputs: [
                  {
                    name: "exercise",
                    label: "Exercise",
                    component: InputComponentsEnum.Select,
                    columns: 6,
                    multiple: false,
                    options: [
                      {
                        value: "Press Dumbbell Chest",
                        label: "Press Dumbbell Chest",
                        groupId: "Chest",
                      },
                      {
                        value: "Press Halter Chest",
                        label: "Press Halter Chest",
                        groupId: "Chest",
                      },
                      { value: "Kettlebell", label: "Kettlebell" },
                    ],
                    groups: [
                      {
                        id: "Chest",
                        label: "Chest",
                      },
                      {
                        id: "Shoulder",
                        label: "Shoulder",
                      },
                    ],
                  },
                  {
                    name: "sets",
                    label: "Sets",
                    component: InputComponentsEnum.Text,
                    columns: 3,
                    placeholder: "3 or 4",
                  },
                  {
                    name: "reps",
                    label: "Reps",
                    component: InputComponentsEnum.Text,
                    columns: 3,
                    placeholder: "12 or 15",
                  },
                ],
              },
            ]}
          />
        }
        actions={[
          {
            label: "Cancel",
            icon: IconsEnum.Cancel,
            color: ColorsEnum.Red,
            onClick: () => setIsModalOpen(false),
          },
          {
            label: "Save",
            icon: IconsEnum.Ok,
            color: ColorsEnum.Green,
            onClick: saveProgram,
          },
        ]}
      />
    </div>
  );
};
