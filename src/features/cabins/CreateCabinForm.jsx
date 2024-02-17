import { useForm } from 'react-hook-form';
import { createRef, useRef } from 'react';

import Input from '../../ui/Form/Input';
import Form from '../../ui/Form/Form';
import Button from '../../ui/Button/Button';
import FileInput from '../../ui/FileInput';
import Textarea from '../../ui/Textarea';
import FormRow from '../../ui/Form/FormRow';

import { useCreateCabin } from './hooks/useCreateCabin';
import { useEditCabin } from './hooks/useEditCabin';

function CreateCabinForm({ cabinToEdit = {}, onCloseModal }) {
  const { isCreating, createCabin } = useCreateCabin();
  const { isEditing, editCabin } = useEditCabin();
  const isWorking = isCreating || isEditing;

  const { id: editId, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  function onSubmit(data) {
    const image =
      typeof data.image === 'string' ? data.image : data.image[0].name;

    if (isEditSession)
      editCabin(
        { newCabinData: { ...data, image }, id: editId },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
    else
      createCabin(
        { ...data, image },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? 'modal' : 'regular'}
    >
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          name="name"
          disabled={isWorking}
          register={register}
          validation={{
            required: 'The name is required',
            minLength: {
              value: 5,
              message: 'Please enter a minimum of 5 characters',
            },
          }}
        />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          name="maxCapacity"
          disabled={isWorking}
          register={register}
          validation={{
            required: 'This field is required',
            min: {
              value: 1,
              message: 'Capacity should be at least 1',
            },
          }}
        />
      </FormRow>

      <FormRow label="Regular price" error={errors?.price?.message}>
        <Input
          type="number"
          id="price"
          name="price"
          disabled={isWorking}
          register={register}
          validation={{
            required: 'This field is required',
            min: {
              value: 1,
              message: 'Capacity should be at least 1',
            },
          }}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          name="discount"
          disabled={isWorking}
          defaultValue={0}
          register={register}
          validation={{
            required: 'This field is required',
            validate: (value) =>
              value <= getValues().price ||
              'Discount should be less than regular price',
          }}
        />
      </FormRow>
      <FormRow
        label="Description for website"
        error={errors?.description?.message}
      >
        <Textarea
          type="number"
          id="description"
          name="description"
          defaultValue=""
          disabled={isWorking}
          register={register}
          validation={{
            required: 'This field is required',
          }}
        />
      </FormRow>
      <FormRow label="Cabin photo">
        <FileInput
          id="image"
          accept="image/*"
          register={register}
          validation={{
            required: isEditSession ? false : 'This field is required',
          }}
        />
      </FormRow>
      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? 'Edit cabin' : 'Create new cabin'}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
