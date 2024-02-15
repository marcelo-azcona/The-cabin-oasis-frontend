import Form from '../../ui/Form/Form';
import FormRow from '../../ui/Form/FormRow';
import Input from '../../ui/Form/Input';
import Spinner from '../../ui/Animation/Spinner';
import { useSettings } from './hooks/useSettings';
import { useUpdateSetting } from './hooks/useUpdateSetting';
import Button from '../../ui/Button/Button';

function UpdateSettingsForm() {
  const { isLoading, settings = {} } = useSettings();
  const { isUpdating, updateSetting } = useUpdateSetting();

  if (isLoading) return <Spinner />;

  function handleSubmit(e) {
    e.preventDefault();
    updateSetting(settings);
  }

  function handleUpdate(e, field) {
    settings[field] = Number(e.target.value);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          defaultValue={settings.minBookingLength}
          disabled={isUpdating}
          onChange={(e) => handleUpdate(e, 'minBookingLength')}
        />
      </FormRow>

      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          defaultValue={settings.maxBookingLength}
          disabled={isUpdating}
          onChange={(e) => handleUpdate(e, 'maxBookingLength')}
        />
      </FormRow>

      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          defaultValue={settings.maxGuestsPerBooking}
          disabled={isUpdating}
          onChange={(e) => handleUpdate(e, 'maxGuestsPerBooking')}
        />
      </FormRow>

      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={settings.breakfastPrice}
          disabled={isUpdating}
          onChange={(e) => handleUpdate(e, 'breakfastPrice')}
        />
      </FormRow>
      <FormRow>
        <Button disabled={isUpdating}>Edit settings</Button>
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
