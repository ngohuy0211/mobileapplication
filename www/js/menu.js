$(document).ready(function (){
    $('#show').on('click', () => {
        const content = $('#result').listview()
            const newContent = `
                        <li>
                        <div class="w3-card-4" style="width:50%">
                        <a href="#">
                            <img src="https://images.alphacoders.com/943/thumb-1920-943148.jpg" style="width:100%">
                            <div class="w3-container w3-center">
                            <h2>Broken Bells</h2>
                            <p>Broken Bells</p>
                            </div
                        </a>
                        </div>
                        </li>
                        <li>
                        <div class="w3-card-4" style="width:50%">
                        <a href="#">
                            <img src="https://images.alphacoders.com/943/thumb-1920-943148.jpg" style="width:100%">
                        <h2>Warning</h2>
                        <p>Hot Chip</p></a>
                        </div>
                        </li>
                        <li>
                        <div class="w3-card-4" style="width:50%">
                        <a href="#">
                            <img src="https://images.alphacoders.com/943/thumb-1920-943148.jpg" style="width:100%">
                        <h2>Wolfgang Amadeus Phoenix</h2>
                        <p>Phoenix</p></a>
                        </div>
                        </li>
                `
        content.append(newContent)
        })

})