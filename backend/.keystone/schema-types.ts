type Scalars = {
  readonly ID: string;
  readonly Boolean: boolean;
  readonly String: string;
  readonly Int: number;
  readonly Float: number;
  readonly JSON: import('@keystone-next/types').JSONValue;
};

export type UserRelateToOneInput = {
  readonly create?: UserCreateInput | null;
  readonly connect?: UserWhereUniqueInput | null;
  readonly disconnect?: UserWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type DeviceRelateToOneInput = {
  readonly create?: DeviceCreateInput | null;
  readonly connect?: DeviceWhereUniqueInput | null;
  readonly disconnect?: DeviceWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type AttemptWhereInput = {
  readonly AND?: ReadonlyArray<AttemptWhereInput | null> | null;
  readonly OR?: ReadonlyArray<AttemptWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly confidence?: Scalars['Int'] | null;
  readonly confidence_not?: Scalars['Int'] | null;
  readonly confidence_lt?: Scalars['Int'] | null;
  readonly confidence_lte?: Scalars['Int'] | null;
  readonly confidence_gt?: Scalars['Int'] | null;
  readonly confidence_gte?: Scalars['Int'] | null;
  readonly confidence_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly confidence_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly threshold?: Scalars['Int'] | null;
  readonly threshold_not?: Scalars['Int'] | null;
  readonly threshold_lt?: Scalars['Int'] | null;
  readonly threshold_lte?: Scalars['Int'] | null;
  readonly threshold_gt?: Scalars['Int'] | null;
  readonly threshold_gte?: Scalars['Int'] | null;
  readonly threshold_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly threshold_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly scanTime?: Scalars['String'] | null;
  readonly scanTime_not?: Scalars['String'] | null;
  readonly scanTime_lt?: Scalars['String'] | null;
  readonly scanTime_lte?: Scalars['String'] | null;
  readonly scanTime_gt?: Scalars['String'] | null;
  readonly scanTime_gte?: Scalars['String'] | null;
  readonly scanTime_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly scanTime_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly user?: UserWhereInput | null;
  readonly user_is_null?: Scalars['Boolean'] | null;
  readonly device?: DeviceWhereInput | null;
  readonly device_is_null?: Scalars['Boolean'] | null;
};

export type AttemptWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortAttemptsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'confidence_ASC'
  | 'confidence_DESC'
  | 'threshold_ASC'
  | 'threshold_DESC'
  | 'scanTime_ASC'
  | 'scanTime_DESC'
  | 'user_ASC'
  | 'user_DESC'
  | 'device_ASC'
  | 'device_DESC';

export type AttemptUpdateInput = {
  readonly confidence?: Scalars['Int'] | null;
  readonly threshold?: Scalars['Int'] | null;
  readonly scanTime?: Scalars['String'] | null;
  readonly user?: UserRelateToOneInput | null;
  readonly device?: DeviceRelateToOneInput | null;
};

export type AttemptsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: AttemptUpdateInput | null;
};

export type AttemptCreateInput = {
  readonly confidence?: Scalars['Int'] | null;
  readonly threshold?: Scalars['Int'] | null;
  readonly scanTime?: Scalars['String'] | null;
  readonly user?: UserRelateToOneInput | null;
  readonly device?: DeviceRelateToOneInput | null;
};

export type AttemptsCreateInput = {
  readonly data?: AttemptCreateInput | null;
};

export type UserRelateToManyInput = {
  readonly create?: ReadonlyArray<UserCreateInput | null> | null;
  readonly connect?: ReadonlyArray<UserWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<UserWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type AttemptRelateToManyInput = {
  readonly create?: ReadonlyArray<AttemptCreateInput | null> | null;
  readonly connect?: ReadonlyArray<AttemptWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<AttemptWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type DeviceWhereInput = {
  readonly AND?: ReadonlyArray<DeviceWhereInput | null> | null;
  readonly OR?: ReadonlyArray<DeviceWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description?: Scalars['String'] | null;
  readonly description_not?: Scalars['String'] | null;
  readonly description_contains?: Scalars['String'] | null;
  readonly description_not_contains?: Scalars['String'] | null;
  readonly description_starts_with?: Scalars['String'] | null;
  readonly description_not_starts_with?: Scalars['String'] | null;
  readonly description_ends_with?: Scalars['String'] | null;
  readonly description_not_ends_with?: Scalars['String'] | null;
  readonly description_i?: Scalars['String'] | null;
  readonly description_not_i?: Scalars['String'] | null;
  readonly description_contains_i?: Scalars['String'] | null;
  readonly description_not_contains_i?: Scalars['String'] | null;
  readonly description_starts_with_i?: Scalars['String'] | null;
  readonly description_not_starts_with_i?: Scalars['String'] | null;
  readonly description_ends_with_i?: Scalars['String'] | null;
  readonly description_not_ends_with_i?: Scalars['String'] | null;
  readonly description_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly threshold?: Scalars['Int'] | null;
  readonly threshold_not?: Scalars['Int'] | null;
  readonly threshold_lt?: Scalars['Int'] | null;
  readonly threshold_lte?: Scalars['Int'] | null;
  readonly threshold_gt?: Scalars['Int'] | null;
  readonly threshold_gte?: Scalars['Int'] | null;
  readonly threshold_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly threshold_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly users_every?: UserWhereInput | null;
  readonly users_some?: UserWhereInput | null;
  readonly users_none?: UserWhereInput | null;
  readonly attempts_every?: AttemptWhereInput | null;
  readonly attempts_some?: AttemptWhereInput | null;
  readonly attempts_none?: AttemptWhereInput | null;
};

export type DeviceWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortDevicesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'threshold_ASC'
  | 'threshold_DESC'
  | 'users_ASC'
  | 'users_DESC'
  | 'attempts_ASC'
  | 'attempts_DESC';

export type DeviceUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly threshold?: Scalars['Int'] | null;
  readonly users?: UserRelateToManyInput | null;
  readonly attempts?: AttemptRelateToManyInput | null;
};

export type DevicesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: DeviceUpdateInput | null;
};

export type DeviceCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly threshold?: Scalars['Int'] | null;
  readonly users?: UserRelateToManyInput | null;
  readonly attempts?: AttemptRelateToManyInput | null;
};

export type DevicesCreateInput = {
  readonly data?: DeviceCreateInput | null;
};

export type DeviceRelateToManyInput = {
  readonly create?: ReadonlyArray<DeviceCreateInput | null> | null;
  readonly connect?: ReadonlyArray<DeviceWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<DeviceWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type UserWhereInput = {
  readonly AND?: ReadonlyArray<UserWhereInput | null> | null;
  readonly OR?: ReadonlyArray<UserWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email?: Scalars['String'] | null;
  readonly email_not?: Scalars['String'] | null;
  readonly email_contains?: Scalars['String'] | null;
  readonly email_not_contains?: Scalars['String'] | null;
  readonly email_starts_with?: Scalars['String'] | null;
  readonly email_not_starts_with?: Scalars['String'] | null;
  readonly email_ends_with?: Scalars['String'] | null;
  readonly email_not_ends_with?: Scalars['String'] | null;
  readonly email_i?: Scalars['String'] | null;
  readonly email_not_i?: Scalars['String'] | null;
  readonly email_contains_i?: Scalars['String'] | null;
  readonly email_not_contains_i?: Scalars['String'] | null;
  readonly email_starts_with_i?: Scalars['String'] | null;
  readonly email_not_starts_with_i?: Scalars['String'] | null;
  readonly email_ends_with_i?: Scalars['String'] | null;
  readonly email_not_ends_with_i?: Scalars['String'] | null;
  readonly email_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly password_is_set?: Scalars['Boolean'] | null;
  readonly createdAt?: Scalars['String'] | null;
  readonly createdAt_not?: Scalars['String'] | null;
  readonly createdAt_lt?: Scalars['String'] | null;
  readonly createdAt_lte?: Scalars['String'] | null;
  readonly createdAt_gt?: Scalars['String'] | null;
  readonly createdAt_gte?: Scalars['String'] | null;
  readonly createdAt_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly createdAt_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly devices_every?: DeviceWhereInput | null;
  readonly devices_some?: DeviceWhereInput | null;
  readonly devices_none?: DeviceWhereInput | null;
  readonly attempts_every?: AttemptWhereInput | null;
  readonly attempts_some?: AttemptWhereInput | null;
  readonly attempts_none?: AttemptWhereInput | null;
  readonly passwordResetToken_is_set?: Scalars['Boolean'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_not?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_lt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_lte?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_gt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_gte?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetIssuedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_not?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_lt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_lte?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_gt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_gte?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetRedeemedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthToken_is_set?: Scalars['Boolean'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_not?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_lt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_lte?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_gt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_gte?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthIssuedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_not?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_lt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_lte?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_gt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_gte?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthRedeemedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
};

export type UserWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortUsersBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'email_ASC'
  | 'email_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'devices_ASC'
  | 'devices_DESC'
  | 'attempts_ASC'
  | 'attempts_DESC'
  | 'passwordResetIssuedAt_ASC'
  | 'passwordResetIssuedAt_DESC'
  | 'passwordResetRedeemedAt_ASC'
  | 'passwordResetRedeemedAt_DESC'
  | 'magicAuthIssuedAt_ASC'
  | 'magicAuthIssuedAt_DESC'
  | 'magicAuthRedeemedAt_ASC'
  | 'magicAuthRedeemedAt_DESC';

export type UserUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly createdAt?: Scalars['String'] | null;
  readonly devices?: DeviceRelateToManyInput | null;
  readonly attempts?: AttemptRelateToManyInput | null;
  readonly passwordResetToken?: Scalars['String'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthToken?: Scalars['String'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
};

export type UsersUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: UserUpdateInput | null;
};

export type UserCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly createdAt?: Scalars['String'] | null;
  readonly devices?: DeviceRelateToManyInput | null;
  readonly attempts?: AttemptRelateToManyInput | null;
  readonly passwordResetToken?: Scalars['String'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthToken?: Scalars['String'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
};

export type UsersCreateInput = {
  readonly data?: UserCreateInput | null;
};

export type _ksListsMetaInput = {
  readonly key?: Scalars['String'] | null;
  readonly auxiliary?: Scalars['Boolean'] | null;
};

export type _ListSchemaFieldsInput = {
  readonly type?: Scalars['String'] | null;
};

export type PasswordAuthErrorCode =
  | 'FAILURE'
  | 'IDENTITY_NOT_FOUND'
  | 'SECRET_NOT_SET'
  | 'MULTIPLE_IDENTITY_MATCHES'
  | 'SECRET_MISMATCH';

export type CreateInitialUserInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
};

export type KeystoneAdminUIFieldMetaCreateViewFieldMode = 'edit' | 'hidden';

export type KeystoneAdminUIFieldMetaListViewFieldMode = 'read' | 'hidden';

export type KeystoneAdminUIFieldMetaItemViewFieldMode =
  | 'edit'
  | 'read'
  | 'hidden';

export type KeystoneAdminUISortDirection = 'ASC' | 'DESC';

export type AttemptListTypeInfo = {
  key: 'Attempt';
  fields:
    | 'id'
    | 'confidence'
    | 'threshold'
    | 'result'
    | 'scanTime'
    | 'user'
    | 'device';
  backing: {
    readonly id: string;
    readonly confidence?: number | null;
    readonly threshold?: number | null;
    readonly scanTime?: Date | null;
    readonly user?: string | null;
    readonly device?: string | null;
  };
  inputs: {
    where: AttemptWhereInput;
    create: AttemptCreateInput;
    update: AttemptUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: AttemptWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortAttemptsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type AttemptListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    AttemptListTypeInfo,
    AttemptListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  AttemptListTypeInfo,
  AttemptListTypeInfo['fields']
>;

export type DeviceListTypeInfo = {
  key: 'Device';
  fields: 'id' | 'name' | 'description' | 'threshold' | 'users' | 'attempts';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly description?: string | null;
    readonly threshold?: number | null;
    readonly users?: string | null;
    readonly attempts?: string | null;
  };
  inputs: {
    where: DeviceWhereInput;
    create: DeviceCreateInput;
    update: DeviceUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: DeviceWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortDevicesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type DeviceListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    DeviceListTypeInfo,
    DeviceListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  DeviceListTypeInfo,
  DeviceListTypeInfo['fields']
>;

export type UserListTypeInfo = {
  key: 'User';
  fields:
    | 'id'
    | 'name'
    | 'email'
    | 'password'
    | 'createdAt'
    | 'devices'
    | 'attempts'
    | 'passwordResetToken'
    | 'passwordResetIssuedAt'
    | 'passwordResetRedeemedAt'
    | 'magicAuthToken'
    | 'magicAuthIssuedAt'
    | 'magicAuthRedeemedAt';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly email?: string | null;
    readonly password?: string | null;
    readonly createdAt?: Date | null;
    readonly devices?: string | null;
    readonly attempts?: string | null;
    readonly passwordResetToken?: string | null;
    readonly passwordResetIssuedAt?: Date | null;
    readonly passwordResetRedeemedAt?: Date | null;
    readonly magicAuthToken?: string | null;
    readonly magicAuthIssuedAt?: Date | null;
    readonly magicAuthRedeemedAt?: Date | null;
  };
  inputs: {
    where: UserWhereInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: UserWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortUsersBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type UserListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    UserListTypeInfo,
    UserListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  UserListTypeInfo,
  UserListTypeInfo['fields']
>;

export type KeystoneListsTypeInfo = {
  readonly Attempt: AttemptListTypeInfo;
  readonly Device: DeviceListTypeInfo;
  readonly User: UserListTypeInfo;
};
