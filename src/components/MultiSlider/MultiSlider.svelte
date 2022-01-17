<script>
	let value1 = 0;
	let value2 = 20;

	const handleChange1 = () => {
		if (value1 > value2) {
			value2 = value1;
		}
	}

	const handleChange2 = () => {
		if (value1 > value2) {
			value1 = value2;
		}
	}
</script>

<input type="range" bind:value="{value1}" on:input={handleChange1}>
<p>{value1}</p>

<input type="range" bind:value="{value2}" on:input={handleChange2}>
<p>{value2}</p>

<style>
	
</style>