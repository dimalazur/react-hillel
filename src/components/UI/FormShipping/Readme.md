```jsx harmony
const formContent = [
		{
			label: "Name",
			type: "text",
			name: "name",
		},
		{
			label: "Last Name",
			type: "text",
			name: "lastName",
		},
		{
			label: "Street Address",
			type: "text",
			name: "streetAddress",
		},
		{
			label: "Apt., Suite, Unit (optional)",
			type: "text",
			name: "optional",
		},
		{
			label: "City",
			type: "text",
			name: "city" ,
		},
		{
			label: "Country",
			type: "select",
			name: "country" ,
			option: [
				{
					value: "AF",
					name: "Afghanistan"
				},
				{
					value: "AX",
					name: "Åland Islands"
				},
				{
					value: "AL",
					name: "Albania"
				},
				{
					value: "DZ",
					name: "Algeria"
				},
				{
					value: "AS",
					name: "American Samoa"
				},
				{
					value: "AD",
					name: "Andorra"
				},
			]
		},
		{
			label: "State",
			type: "select",
			name: "state" ,
			option: [
				{
					value: "state-1",
					name: "State 1"
				},
				{
					value: "state-2",
					name: "State 2"
				},
				{
					value: "state-3",
					name: "State 3"
				},
				{
					value: "state-4",
					name: "State 4"
				},
				{
					value: "state-5",
					name: "State 5"
				},
			]
		},
		{
			label: "ZIP Code",
			typeField: "text",
			name: "zipCode",
		},
		{
			label: "Phone Number",
			typeField: "tel",
			name: "PhoneNumber",
		},
		{
			label: "Email",
			typeField: "email",
			name: "email",
		},
	];
<FormShipping formContent={formContent}></FormShipping>
```