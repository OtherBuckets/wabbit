<template>
  <div id="aws-info">
    <h1>First things first: connecting to AWS</h1>
    <p>
      Wabbit works by backing up your data to your AWS Glacier service. If you haven’t
      registered for an account already, you’ll need to do that, and if you need help, you
      can checkout our
      <a
        target="_blank"
        @click.prevent="AwsInfo.openAwsDocumentation()"
        href="javascript:void(0);"
      >
        docs for guidance.
      </a>
    </p>
    <ValidationObserver tag="form" v-slot="{ invalid }" rules="required">
        <div>
          <select
            required
            name="aws-region"
            id="aws-region"
            class="form-control-lg"
            v-model="profile.region"
          >
            <option
              disabled
              value=""
              selected
            >
              Select Your Region
            </option>
            <option
              v-for="(region, index) in awsRegions"
              :key="index"
              :value="region.value"
            >
              {{ region.name }}
            </option>
          </select>
        </div>
        <div>
          <input
            required
            type="text"
            class="form-control-lg"
            placeholder="API Key"
            v-model="profile.apiKey"
          />
        </div>
        <div>
          <input
            required
            type="password"
            class="form-control-lg"
            placeholder="API Secret"
            v-model="profile.apiSecret"
          />
        </div>
        <div>
          <button
            type="submit"
            class="btn-large btn-light"
            :disabled="invalid"
          >
            Next
          </button>
        </div>
    </ValidationObserver>
  </div>
</template>

<script lang="ts">
import { shell } from 'electron';
import { Vue, Component, Prop } from 'vue-property-decorator';
import { AwsProfile } from '@/types';

@Component({
  data: () => ({
    AwsInfo,
  }),
})
export default class AwsInfo extends Vue {
  @Prop({ type: Function, required: true })
  private next!: () => void;

  @Prop({ type: Object, required: true })
  private profile!: AwsProfile;

  private awsRegions = [
    {
      value: 'us-east-1',
      name: 'US East (N. Virginia)',
    }, {
      value: 'us-east-2',
      name: 'US East (Ohio)',
    }, {
      value: 'us-west-1',
      name: 'US West (N. California)',
    }, {
      value: 'us-west-2',
      name: 'US West (Oregon)',
    }, {
      value: 'ca-central-1',
      name: 'Canada (Central)',
    }, {
      value: 'eu-central-1',
      name: 'EU (Frankfurt)',
    }, {
      value: 'eu-west-1',
      name: 'EU (Ireland)',
    }, {
      value: 'eu-west-2',
      name: 'EU (London)',
    }, {
      value: 'eu-west-3',
      name: 'EU (Paris)',
    }, {
      value: 'eu-north-1',
      name: 'EU (Stockholm)',
    }, {
      value: 'ap-east-1',
      name: 'Asia Pacific (Hong Kong)',
    }, {
      value: 'ap-northeast-1',
      name: 'Asia Pacific (Tokyo)',
    }, {
      value: 'ap-northeast-2',
      name: 'Asia Pacific (Seoul)',
    }, {
      value: 'ap-northeast-3',
      name: 'Asia Pacific (Osaka-Local)',
    }, {
      value: 'ap-southeast-1',
      name: 'Asia Pacific (Singapore)',
    }, {
      value: 'ap-southeast-2',
      name: 'Asia Pacific (Sydney)',
    }, {
      value: 'ap-south-1',
      name: 'Asia Pacific (Mumbai)',
    }, {
      value: 'me-south-1',
      name: 'Middle East (Bahrain)',
    }, {
      value: 'sa-east-1',
      name: 'South America (São Paulo)',
    },
  ];

  static openAwsDocumentation() {
    shell.openExternal('https://github.com/OtherBuckets/wabbit/wiki/Configuring-AWS');
  }
}
</script>

<style scoped lang="scss">
#aws-info {
  text-align: center;
  width: 560px;
}

h1,
p,
a,
a:visited {
  color: $text-color-light;
}

a,
a:visited {
  font-weight: normal;
  text-decoration: underline;
}

input,
select {
  color: $text-color-dark;
  text-align: center;
  text-align-last:center;
  width: 300px;
}
</style>
