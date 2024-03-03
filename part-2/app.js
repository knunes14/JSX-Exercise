function app() {
    return (
        <div>
            <tweet name="Beyonce Knowles" username="yonceeee" date={new Date().toDateString()} message="Renaissance bb" />
            <tweet name="Drake" username="drakeeeee" date={new Date().toDateString()} message="hotline blingggg" />
            <tweet name="Taylor Swift" username="swiftieeee" date={new Date().toDateString()} message="teardropssss" />
        </div>
    );
}